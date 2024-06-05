import express from "express"
import mysql from "mysql"
import cors from "cors";
import util from "util";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";
import nodemailer from "nodemailer";
// import bcrypt from "bcryptjs";
import bcrypt from "bcrypt"
const saltRounds = 10

configDotenv();

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "QWERTY@12345",
    database: "jobportaldb"
})

// if there is a auth problem
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'QWERTY@12345'

db.query = util.promisify(db.query);

app.use(express.json())
app.use(cors());
app.use(cookieParser());

//testing
app.get('/test', (req, res) => {
    res.json({ message: 'endpoint is running...!' });
});

//////////////////////////////////API CALLS FOR RECRUITER////////////////////////////////////////

// this is api call to fetch data for recruiter table
app.get('/recruiters', (req, res) => {
    const query = "SELECT id, companyName, companyType, mailId, recruiterName, role, recruiterNumber, recruiterAltNumber, status, appliedDate FROM recruiters";
    db.query(query, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Error fetching data from database' });
        } else {
            res.json(results);
        }
    });
});

// changing status of recruiters
app.post('/updateStatus/:recruiterId', (req, res) => {
    const { recruiterId } = req.params;
    const { status, mailId } = req.body;

    const query = "UPDATE recruiters SET status = ? WHERE id = ?";
    db.query(query, [status, recruiterId], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Error updating status in the database' });
        } else {
            sendEmail(mailId, status);
            res.json({ message: 'Status updated successfully' });
        }
    });
});

// Sending email function that will be used in upper api call
function sendEmail(to, status) {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PW,
        }
    });

    const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to,
        subject: 'Recruiter Status Update',
        html: `<p>Your application for job posting has been ${status}. Click <a href="https://yourwebsite.com">here</a> to start posting jobs.</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Email sending error:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

// disabling a recruiter row
app.post('/disableRecruiter/:recruiterId', (req, res) => {
    const { recruiterId } = req.params;
    const { status } = req.body;

    const query = "UPDATE recruiters SET status = ? WHERE id = ?";
    db.query(query, [status, recruiterId], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Error updating status in the database' });
        } else {
            res.json({ message: 'Status updated successfully' });
        }
    });
});

// enabling a recruiter row
app.post('/enableRecruiter/:recruiterId', (req, res) => {
    const { recruiterId } = req.params;
    const { status } = req.body;

    const query = "UPDATE recruiters SET status = ? WHERE id = ?";
    db.query(query, [status, recruiterId], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Error updating status in the database' });
        } else {
            res.json({ message: 'Status updated successfully' });
        }
    });
});

// deleting a recruiter row
app.delete('/deleteRecruiter/:id', (req, res) => {
    const recruiterId = req.params.id;

    const query = "DELETE FROM recruiters WHERE id = ?";
    db.query(query, [recruiterId], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Error deleting recruiter from the database' });
        } else {
            res.json({ message: 'Recruiter deleted successfully' });
        }
    });
});

//////////////////////////////////API CALLS FOR FRESHERS////////////////////////////////////////

// this is api call to fetch data for freshers table
app.get('/freshers', (req, res) => {
    const query = `
        SELECT id, name, contactNumber, institute,certification, appliedDate FROM freshers `;

    db.query(query, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Error fetching data from database' });
        } else {
            res.json(results);
        }
    });
});

// deleting a fresher row
app.delete('/deleteFre/:id', (req, res) => {
    const fresherId = req.params.id;

    const query = "DELETE FROM freshers WHERE id = ?";
    db.query(query, [fresherId], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Error deleting data from the database' });
        } else {
            res.json({ message: 'Data deleted successfully' });
        }
    });
});

//////////////////////////////////API CALLS FOR PROFESSIONALS////////////////////////////////////////

// this is api call to fetch data for professionals table
app.get('/professionals', (req, res) => {
    const query = `
        SELECT id, name, mobile, appliedDate, currentCompany, designation, noticePeriod FROM professionals `;

    db.query(query, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Error fetching data from database' });
        } else {
            res.json(results);
        }
    });
});

// deleting a professional row
app.delete('/deletePro/:id', (req, res) => {
    const professionalId = req.params.id;

    const query = "DELETE FROM professionals WHERE id = ?";
    db.query(query, [professionalId], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Error deleting data from the database' });
        } else {
            res.json({ message: 'Data deleted successfully' });
        }
    });
});

app.listen(8800, () => {
    console.log("Connected to backend...!")
})

//////////////////////////MOBILE APP BACKEND API CALLS//////////////////////////////////////////

// api call for first time password storing
app.post('/setPass/:id', async (req, res) => {  // id shall be passed from frontend so relevent row would effected
    const recruiterId = req.params.id;
    const { passwordRecruiter } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(passwordRecruiter, saltRounds);

        const query = "UPDATE recruiters SET passwordRecruiter = ? WHERE id = ?";
        db.query(query, [hashedPassword, recruiterId], (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).json({ message: 'Error storing password in the database' });
            } else {
                const token = jwt.sign({ recruiterId: recruiterId }, process.env.JWT_SECRET_KEY, {
                    expiresIn: "1h",
                });

                // setting jwt in cookies
                res.cookie("jwt", token, {
                    httpOnly: true,
                    maxAge: 3600000,
                });

                res.json({ message: 'Password stored successfully', token });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error hashing password' });
    }
});

// login api for stored password i.e. when recruiter will be login second time
app.post('/login-rec', async (req, res) => {
    const { mobileNumber, password } = req.body;  //mobilenumber and password will be provided on frontend

    try {
        const q = "SELECT * FROM recruiters WHERE mobileNumber = ?";
        const recruiterResults = await db.query(q, [mobileNumber]);

        if (!recruiterResults[0]) {
            return res.status(404).json({ error: "Recruiter not found" });
        }

        const foundRecruiter = recruiterResults[0];

        const passwordMatch = await bcrypt.compare(password, foundRecruiter.passwordRecruiter);

        if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid password" });
        }

        const token = jwt.sign({ id: foundRecruiter.id }, process.env.JWT_SECRET_KEY, {
            expiresIn: "1h",
        });

        // Set JWT in cookies
        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: 3600000,
        });

        return res.json({ token, message: "logged in successfully" });
    } catch (error) {
        console.error("Error logging in:", error);
        return res.status(500).json({ error: "Error logging in", details: error.message });
    }
});

//////////////////////////CATEGORIES API CALLS//////////////////////////////////////////

// Api for adding new category
app.post('/categories', (req, res) => {
    const { category_name } = req.body;  //this name will be provided from frontend
    const category = { category_name };

    db.query('INSERT INTO categories SET ?', category, (err, result) => {
        if (err) {
            console.error('Error creating category:', err);
            res.status(500).json({ error: 'Error creating category' });
            return;
        }
        res.status(201).json({ id: result.insertId, ...category });
    });
});

//Api for  Retrieving all categories
app.get('/categories', (req, res) => {
    db.query('SELECT * FROM categories', (err, results) => {
        if (err) {
            console.error('Error retrieving categories:', err);
            res.status(500).json({ error: 'Error retrieving categories' });
            return;
        }
        res.json(results);
    });
});

//api for deleting a category

app.delete('/categories/:id', (req, res) => {
    const categoryId = req.params.id;

    const query = "DELETE FROM categories WHERE id = ?";  //for testing this is url:  http://localhost:8800/categories/4
    db.query(query, [categoryId], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Error deleting data from the database' });
        } else {
            res.json({ message: "Data Deleted successfully" });
        }
    });
});

// api for updating a category

app.put('/categories/:id', (req, res) => {
    const { id } = req.params;
    const { category_name } = req.body;
    const query = 'UPDATE categories SET category_name = ? WHERE id = ?';
    db.query(query, [category_name, id], (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).json({ message: 'Error updating category in the database' });
        } else {
            res.json({ message: 'Category updated successfully' });
        }
    });
});

//////////////////////////JOB POST API CALLS//////////////////////////////////////////
// posting a new job

app.post('/post-job', (req, res) => {
    const {
        title,
        job_category,
        job_type,
        salary,
        experience,
        qualification,
        gender,
        job_description,
        location,
        posting_date,
        complete_address,
        benefits,
        language,
        working_days,
        job_shift,
        skills,
        noOfOpenings,
    } = req.body;

    const q =
        'INSERT INTO jobs (title, job_category, job_type, salary, experience, qualification, gender, job_description, location, posting_date, complete_address, benefits, language, working_days, job_shift, skills, noOfOpenings) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    const values = [
        title,
        job_category,
        job_type,
        salary,
        experience,
        qualification,
        gender,
        job_description,
        location,
        posting_date,
        complete_address,
        benefits,
        language,
        working_days,
        job_shift,
        skills,
        noOfOpenings,
    ];

    db.query(q, values, (err, result) => {
        if (err) {
            console.error('Error posting job:', err);
            return res.status(500).json({ error: 'Error posting job' });
        }
        console.log('Successfully posted the job');
        return res.json({ message: 'Job posted successfully' });
    });
});

// GET job by ID
app.get("/post-job/:jobId", (req, res) => {
    const jobId = req.params.jobId;
    const query = "SELECT * FROM jobs WHERE id = ?";  // tested on this url:  http://localhost:8800/post-job/3

    db.query(query, [jobId], (err, data) => {
        if (err) {
            console.error("Error fetching job:", err);
            return res.status(500).json({ error: err });
        }

        if (data.length === 0) {
            return res.status(404).json({ message: "Job not found" });
        }

        const job = data[0];
        return res.json(job);
    });
});

// DELETE job by ID
app.delete("/post-job/:jobId", (req, res) => {
    const jobId = req.params.jobId;
    const deleteQuery = "DELETE FROM jobs WHERE id = ?";

    db.query(deleteQuery, [jobId], (err, result) => {
        if (err) {
            console.error("Error deleting job:", err);
            return res.status(500).json({ error: err });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Job not found" });
        }

        console.log("Job deleted successfully");
        return res.json({ message: "Job deleted successfully" });
    });
});

// Updating a job by ID
app.put("/post-job/:jobId", async (req, res) => {
    const jobId = req.params.jobId;  // this is update api for updating all the columns at once
    const {
        title,
        job_category,
        job_type,
        salary,
        experience,
        qualification,
        gender,
        job_description,
        location,
        posting_date,
        complete_address,
        benefits,
        language,
        working_days,
        job_shift,
        skills,
        noOfOpenings
    } = req.body;

    const updateQuery = `
          UPDATE jobs
          SET
          title = ?,
          job_category = ?,
          job_type  = ?, 
          salary = ?,
          experience = ?,
          qualification = ?,
          gender = ?,
          job_description = ?,
          location = ?,
          posting_date = ?,
          complete_address = ?,
          benefits = ?,
          language = ?,
          working_days = ?,
          job_shift = ?,
          skills = ?,
          noOfOpenings = ?
          WHERE
              id = ?
      `;

    const updateValues = [title,
        job_category,
        job_type,
        salary,
        experience,
        qualification,
        gender,
        job_description,
        location,
        posting_date,
        complete_address,
        benefits,
        language,
        working_days,
        job_shift,
        skills,
        noOfOpenings,
        jobId];

    db.query(updateQuery, updateValues, (err, result) => {
        if (err) {
            console.error("Error updating job:", err);
            return res.status(500).json({ error: err });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Job not found" });
        }

        console.log("Job updated successfully");
        return res.json({ message: "Job updated successfully" });
    });
});

//   update api for job
app.patch("/post-job/:jobId", async (req, res) => {
    const jobId = req.params.jobId;
    const updateFields = req.body; // this is update api for updating any column without affecting other columns of a row

    if (Object.keys(updateFields).length === 0) {  // tested successfully with this url:  http://localhost:8800/post-job/2  and this body: "title" : "checking updating the name, lets see",
        return res.status(400).json({ message: "No fields to update" });
    }

    const updateValues = [];
    const updateQueryParts = [];

    for (const field in updateFields) {
        updateQueryParts.push(`${field} = ?`);
        updateValues.push(updateFields[field]);
    }

    const updateQuery = `
        UPDATE jobs
        SET
        ${updateQueryParts.join(", ")}
        WHERE
        id = ?
    `;

    updateValues.push(jobId);

    db.query(updateQuery, updateValues, (err, result) => {
        if (err) {
            console.error("Error updating job:", err);
            return res.status(500).json({ error: err });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Job not found" });
        }

        console.log("Job updated successfully");
        return res.json({ message: "Job updated successfully" });
    });
});

// api for jobs which category is clicked on frontend////  OMAIS Asked

app.get("/categories/:jobId", (req, res) => {
    const jobId = req.params.jobId;
    const query = "SELECT * FROM categories WHERE id = ?";  //tested succesfully on this url:  http://localhost:8800/categories/6 user click on any category its id will pass to backend

    db.query(query, [jobId], (err, data) => {
        if (err) {
            console.error("Error fetching job:", err);
            return res.status(500).json({ error: err });
        }

        if (data.length === 0) {
            return res.status(404).json({ message: "Job not found" });
        }

        const job = data[0];
        const categoryName = job.category_name;
        console.log("Category Name:", categoryName);

        // Now, query jobs by category
        const jobsQuery = "SELECT * FROM jobs WHERE job_category = ?";

        db.query(jobsQuery, [categoryName], (err, jobsData) => {
            if (err) {
                console.error("Error fetching jobs by category:", err);
                return res.status(500).json({ error: err });
            }

            if (jobsData.length === 0) {
                return res.status(404).json({ message: "No jobs found in this category" });
            }

            const jobsInCategory = jobsData;
            console.log("jobs :", jobsInCategory);
            return res.json({ category: categoryName, jobs: jobsInCategory });
        });
    });
});


//////////////////////////FILTERING JOB API CALLS//////////////////////////////////////////

app.get('/search-jobs', (req, res) => {
    const { search } = req.query;  // api working on thunderclient:  localhost:8800/search-jobs?search=Labour

    const q = 'SELECT * FROM jobs WHERE job_category LIKE ?';
    const values = [`%${search}%`];

    db.query(q, values, (err, results) => {
        if (err) {
            console.error('Error searching for jobs:', err);
            return res.status(500).json({ error: 'Error searching for jobs' });
        }
        return res.json(results);
    });
});

//////////////////////////GET ALL JOBS API CALLS//////////////////////////////////////////

app.get('/get-all-jobs', (req, res) => {
    const q = 'SELECT * FROM jobs ORDER BY posting_date DESC';

    db.query(q, (err, results) => {
        if (err) {
            console.error('Error fetching jobs:', err);
            return res.status(500).json({ error: 'Error fetching jobs' });
        }

        return res.json(results);
    });
});

//////////////////////////RESET PASSWORD 4 digit number sending to email API CALL//////////////////////////////////////////

// for this api only
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
    }
});

// this api asked by OMAIS
app.post("/reset-password", (req, res) => {
    const { email } = req.body;  // tested susscessfully on this url POST : http://localhost:8800/reset-password and body "email":"validgmail"

    // Check if the email exists in the 'freshers' table
    const fresherQuery = "SELECT email FROM freshers WHERE email = ?";
    db.query(fresherQuery, [email], (fresherError, fresherResults) => {
        if (fresherError) {
            console.error("Error checking fresher email:", fresherError);
            return res.status(500).json({ error: "Internal server error" });
        }

        // Check if the email exists in the 'professionals' table
        const professionalQuery = "SELECT email FROM professionals WHERE email = ?";
        db.query(professionalQuery, [email], (professionalError, professionalResults) => {
            if (professionalError) {
                console.error("Error checking professional email:", professionalError);
                return res.status(500).json({ error: "Internal server error" });
            }

            if (fresherResults.length === 0 && professionalResults.length === 0) {
                return res.status(404).json({ message: "Email not found" });
            }

            // Generating  4-digit random number
            const randomCode = Math.floor(1000 + Math.random() * 9000);

            const mailOptions = {
                from: process.env.NODEMAILER_EMAIL,
                to: email,
                subject: 'Password Reset',
                text: `Your verification code is: ${randomCode}`,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Email sending error:', error);
                    return res.status(500).json({ error: "Internal server error" });
                } else {
                    console.log('Email sent:', info.response);
                    return res.json({ message: "Password reset email sent successfully" });
                }
            });
        });
    });
});
