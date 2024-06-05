import React, { useState, useEffect } from 'react';
import index from "@/pages/settings";
import Image from "next/image";
import axios from 'axios';
import { Dropdown, Menu } from 'antd';
import DeleteModal from "../Component/DeleteModal"

const RecruiterTable = () => {

  const [showButtons, setShowButtons] = useState([]);
  const [recruiters, setRecruiters] = useState([]);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedRecruiterId, setSelectedRecruiterId] = useState(null);

  console.log('data', recruiters);

  const companyColor = ["#2668E8", "#09D690", "#F05519", "#09D690", "#2668E8", "#09D690", "#F05519", "#2668E8", "#09D690", "#F05519",]
  const statusColor = ["#F0551930", "#09D69038", "#F0551930", "#A0A0A0"];

  useEffect(() => {
    axios.get('http://localhost:8800/recruiters')
      .then(response => {
        setRecruiters(response.data);
        setShowButtons(new Array(response.data.length).fill(false));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const toggleButtons = (index) => {
    const newShowButtons = [...showButtons];
    newShowButtons[index] = !newShowButtons[index];
    setShowButtons(newShowButtons);
  };

  // request for changing status and email sending
  const handleApprove = (recruiterId, mailId) => {
    axios.post(`http://localhost:8800/updateStatus/${recruiterId}`, {
      status: 'Approved',
      mailId: mailId
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error updating status:', error);
      });
  };

  // api call for changing status to disabled
  const handleDisable = (recruiterId) => {
    axios.post(`http://localhost:8800/disableRecruiter/${recruiterId}`, {
      status: 'Disabled'
    })
      .then(response => {
        console.log(response.data);
        const updatedRecruiters = recruiters.map(recruiter => {
          if (recruiter.id === recruiterId) {
            return { ...recruiter, status: 'Disabled' };
          }
          return recruiter;
        });
        setRecruiters(updatedRecruiters);
      })
      .catch(error => {
        console.error('Error updating status:', error);
      });
  };

  // api call for changing status to Pending
  const handleEnable = (recruiterId) => {
    axios.post(`http://localhost:8800/enableRecruiter/${recruiterId}`, {
      status: 'Pending'
    })
      .then(response => {
        console.log(response.data);
        const updatedRecruiters = recruiters.map(recruiter => {
          if (recruiter.id === recruiterId) {
            return { ...recruiter, status: 'Pending' };
          }
          return recruiter;
        });
        setRecruiters(updatedRecruiters);
      })
      .catch(error => {
        console.error('Error updating status:', error);
      });
  };

  // api for changing deleting a record
  const handleDelete = (recruiterId) => {
    axios.delete(`http://localhost:8800/deleteRecruiter/${recruiterId}`)
      .then(response => {
        console.log(response.data);
        const updatedRecruiters = recruiters.filter(recruiter => recruiter.id !== recruiterId);
        setRecruiters(updatedRecruiters);
      })
      .catch(error => {
        console.error('Error deleting recruiter:', error);
      });
  };

  const showDeleteModal = (recruiterId) => {
    setSelectedRecruiterId(recruiterId);
    setDeleteModalVisible(true);
  };

  const hideDeleteModal = () => {
    setSelectedRecruiterId(null);
    setDeleteModalVisible(false);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto bg-white mt-5 w-full border-collapse ">
        <thead>
          <tr>
            <th className="px-4 py-4 h-10 text-start">
              {" "}
              <input type="checkbox" className="w-5 h-5" />
            </th>
            <th className="px-4   font-poppins font-medium py-4 h-10 text-start">
              Order ID
            </th>
            <th className="px-4 font-poppins font-medium py-4 h-10 text-start">
              Date Applied
            </th>
            <th className="px-4 font-poppins font-medium py-4 h-10 text-start">
              Company
            </th>
            <th className="px-4 font-poppins font-medium py-4 h-10 text-start">
              Name
            </th>
            <th className="px-4 font-poppins font-medium py-4 h-10 text-start">
              Position
            </th>
            <th className="px-4 font-poppins font-medium py-4 h-10 text-start">
              Contact
            </th>
            <th className="px-4 font-poppins font-medium py-4 h-10 text-start">
              Status
            </th>
            <th className="px-4 font-poppins font-medium py-4 h-10 text-start">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {recruiters.map((recruiter, index) => (
            <tr key={recruiter.id}
              className={`border-t ${recruiter.status === 'Disabled' ? 'disabledRow' : ''}`}>
              <td className="px-4 py-4">
                <input type="checkbox" className="w-5 h-5" />
              </td>
              <td className="px-4 font-normal font-poppins py-4">
                {recruiter.id}
              </td>
              <td className="px-4 font-normal font-poppins py-2">{recruiter.appliedDate}</td>
              <td className="px-4 py-4">
                <div className="flex gap-2">
                  <div
                    style={{
                      backgroundColor: companyColor[index % companyColor.length]
                    }}
                    className="p-4 rounded-lg"
                  ></div>
                  <h1 className="font-medium mt-[0.4rem] font-poppins">
                    {recruiter.companyName}
                  </h1>
                </div>
              </td>
              <td className="px-4 font-poppins font-medium py-4">
                {recruiter.recruiterName}
              </td>
              <td className="px-4 font-poppins font-medium py-4">{recruiter.role}</td>
              <td className="px-4 py-4">
                <div className="flex gap-1">
                  <Image
                    src={"/images/phone.svg"}
                    height={10}
                    width={13}
                    alt="phone"
                  />
                  <h1 className="font-medium font-poppins"> {recruiter.recruiterNumber}/{recruiter.recruiterAltNumber}</h1>
                </div>
              </td>
              <td className="px-4 py-4">
                <div
                  style={{
                    backgroundColor: statusColor[index % statusColor.length]
                  }}
                  className="pt-1 pb-1 pl-4 pr-3  rounded-lg "
                >
                  <h1 className="font-poppins font-normal">{recruiter.status}</h1>
                </div>
              </td>
              <td className="px-4 py-4">
                <Dropdown
                  overlay={
                    <Menu className="bg-white shadow-md border rounded-lg py-2 px-0">
                      {recruiter.status !== 'Disabled' && (
                        <Menu.Item
                          key="approve"
                          className="px-4 py-2 bg-green-400"
                          onClick={() => handleApprove(recruiter.id, recruiter.mailId)}
                        >
                          Approve
                        </Menu.Item>
                      )}
                      <Menu.Divider />
                      {recruiter.status === 'Disabled' ? (
                        <Menu.Item
                          key="enable"
                          className="px-4 py-2 bg-blue-500"
                          onClick={() => handleEnable(recruiter.id)}
                        >
                          Enable
                        </Menu.Item>
                      ) : (
                        <Menu.Item
                          key="disable"
                          className="px-4 py-2 bg-slate-400"
                          onClick={() => handleDisable(recruiter.id)}
                        >
                          Disable
                        </Menu.Item>
                      )}
                      <Menu.Divider />
                      <Menu.Item
                        key="delete"
                        className="px-4 py-2 bg-red-400"
                        // onClick={() => handleDelete(recruiter.id)}
                        onClick={() => showDeleteModal(recruiter.id)}
                      >
                        Delete
                      </Menu.Item>
                    </Menu>
                  }
                  trigger={['click']}
                >
                  <a className="cursor-pointer" onClick={(e) => e.preventDefault()}>
                    <Image
                      src={"/images/dots.svg"}
                      height={5}
                      width={3}
                      alt="dots"
                      className={`m-auto ${showButtons[index] ? "opacity-100" : "opacity-50"}`}
                      onClick={() => toggleButtons(index)}
                    />
                  </a>
                </Dropdown>
              </td>
            </tr>
          ))}

          <DeleteModal
            visible={deleteModalVisible}
            onConfirm={() => {
              handleDelete(selectedRecruiterId);
              hideDeleteModal();
            }}
            onCancel={hideDeleteModal}
          />
        </tbody>
      </table>
    </div>
  );
};

export default RecruiterTable;
