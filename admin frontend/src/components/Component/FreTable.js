import React, { useState, useEffect } from 'react';
import index from "@/pages/settings";
import Image from "next/image";
import axios from 'axios';
import { Dropdown, Menu } from 'antd';
import DeleteModal from "../Component/DeleteModal"

const FreTable = () => {

    const [showButtons, setShowButtons] = useState([]);
    const [freshers, setFreshers] = useState([]);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [selectedFresherId, setSelectedFresherId] = useState(null);

    console.log('freshers data', freshers);

    const companyColor = ["#2668E8", "#09D690", "#F05519"]
    const statusColor = ["#F0551930", "#09D69038"];

    useEffect(() => {
        axios.get('http://localhost:8800/freshers')
            .then(response => {
                setFreshers(response.data);
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

    // api for deleting a record
    const handleDelete = (fresherId) => {
        axios.delete(`http://localhost:8800/deleteFre/${fresherId}`)
            .then(response => {
                console.log(response.data);
                const updatedFreshers = freshers.filter(fresher => fresher.id !== fresherId);
                setFreshers(updatedFreshers);
            })
            .catch(error => {
                console.error('Error deleting recruiter:', error);
            });
    };

    const showDeleteModal = (fresherId) => {
        setSelectedFresherId(fresherId);
        setDeleteModalVisible(true);
    };

    const hideDeleteModal = () => {
        setSelectedFresherId(null);
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
                            Name
                        </th>
                        <th className="px-4 font-poppins font-medium py-4 h-10 text-start">
                            Institute
                        </th>
                        <th className="px-4 font-poppins font-medium py-4 h-10 text-start">
                            Contact
                        </th>
                        <th className="px-4 font-poppins font-medium py-4 h-10 text-start">
                            Certifications
                        </th>
                        <th className="px-4 font-poppins font-medium py-4 h-10 text-start">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {freshers.map((fresher, index) => (
                        <tr key={fresher.id} className="border-t">
                            <td className="px-4 py-4">
                                <input type="checkbox" className="w-5 h-5" />
                            </td>
                            <td className="px-4 font-normal font-poppins py-4">
                                {fresher.id}
                            </td>
                            <td className="px-4 font-normal font-poppins py-2">{fresher.appliedDate}</td>
                            <td className="px-4 font-poppins font-medium py-4">
                                {fresher.name}
                            </td>
                            <td className="px-4 py-4">
                                <div className="flex gap-2">
                                    <div
                                        style={{ backgroundColor: companyColor[index % companyColor.length] }}
                                        className="p-4 rounded-lg"
                                    ></div>
                                    <h1 className="font-medium mt-[0.4rem] font-poppins">
                                        {fresher.institute}
                                    </h1>
                                </div>
                            </td>
                            <td className="px-4 py-4">
                                <div className="flex gap-1">
                                    <Image
                                        src={"/images/phone.svg"}
                                        height={10}
                                        width={13}
                                        alt="phone"
                                    />
                                    <h1 className="font-medium font-poppins"> {fresher.contactNumber}</h1>
                                </div>
                            </td>
                            <td className="px-4 py-4">
                                <div
                                    style={{ backgroundColor: statusColor[index % statusColor.length] }}
                                    className="pt-1 pb-1 pl-4 pr-3  rounded-lg "
                                >
                                    <h1 className="font-poppins font-normal">{fresher.certification}</h1>
                                </div>
                            </td>
                            <td className="px-4  py-4">
                                <Dropdown
                                    overlay={
                                        <Menu className="bg-white shadow-md border rounded-lg py-2 px-0">
                                            <Menu.Item
                                                key="delete"
                                                className="px-4 py-2 bg-red-400"
                                                // onClick={() => handleDelete(fresher.id)}
                                                onClick={() => showDeleteModal(fresher.id)}
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
                            handleDelete(selectedFresherId);
                            hideDeleteModal();
                        }}
                        onCancel={hideDeleteModal}
                    />
                </tbody>
            </table>
        </div>
    );
};

export default FreTable;
