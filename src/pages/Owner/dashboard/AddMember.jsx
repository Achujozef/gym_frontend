import React, { useState } from "react";
import {
  Card,
  CardBody,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Button,
  Input,
  Select,
} from "@material-tailwind/react";
import UserIcon from "../../../assets/gym -icons/User_Icon.svg"
import UserIconDark from "../../../assets/gym -icons/User_Icon1.svg"
import {
  useMaterialTailwindController
} from "../../../context/index";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,

} from "@heroicons/react/24/solid";
import { ProfileInfoCard } from "../../../widgets/cards/profile-info-card";
import { Link } from "react-router-dom";


export function AddMember() {
  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;
  //toggle
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    profileImage: null,
    firstname: " ",
    lastname: " ",
    mobilenumber: " ",
    email: " ",
    gender: " ",
    age: " ",
    height: " ",
    weight: " ",
    proffession: " ",
    address: " "
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Function to handle image file upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profileImage: file
    }));
  };

  // Function to handle saving changes
  const handleSaveChanges = () => {
    // Logic to save changes goes here
    setIsEditing(false); // Once changes are saved, exit edit mode
  };

  return (
    <>
      <Card className={`mt-10 ml mb-6  w-full  ${sidenavType === 'dark' ? "bg-black" : "bg-white border border-blue-gray-100"}`}>
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="w-96">
              {/* <Avatar
                  image={formData.profileImage ? URL.createObjectURL(formData.profileImage) : {UserIcon}}
                  size="lg"
                /> */}


              {formData.profileImage ?
                <div className="relative w-36 h-36 -mb-5">
                  <Avatar
                    src={URL.createObjectURL(formData.profileImage)}
                    alt="Profile Image"
                    size="xl"
                    variant="rounded"
                    className="rounded-lg shadow-lg shadow-blue-gray-500/40 p-2 border"
                  />
                  <label htmlFor="profile-image" className="absolute bottom-16 border right-16 cursor-pointer bg-white rounded-full p-2">
                    <input type="file" id="profile-image" className="hidden" onChange={handleImageUpload} accept="image/*" />
                    <PencilIcon className="h-4 w-4 text-black" />
                  </label>
                </div> :
                <div className="relative w-36 h-36 -mb-5" >
                  {sidenavType == 'dark' ?
                    <Avatar
                      src={UserIconDark}
                      alt="Profile Image"
                      size="xl"
                      variant="rounded"
                      className="rounded-lg shadow-lg shadow-blue-gray-500/40 p-2 border"
                    /> :
                    <Avatar
                      src={UserIcon}
                      alt="Profile Image"
                      size="xl"
                      variant="rounded"
                      className="rounded-lg shadow-lg shadow-blue-gray-500/40 p-2 border"
                    />
                  }

                  <label htmlFor="profile-image" className="absolute bottom-16 border right-16 cursor-pointer bg-white rounded-full p-2">
                    <input type="file" id="profile-image" className="hidden" onChange={handleImageUpload} accept="image/*" />
                    <PencilIcon className="h-4 w-4 text-black" />
                  </label>

                </div>
              }

            </div>
          </div>
          {/* Profile Information */}
          <div className="grid-cols-1 mb-12 grid gap-y-5 gap-x-5 px-4 lg:grid-cols-2 xl:grid-cols-3 w-full">
            {/* Editable Profile Information */}
            <div>
              <Typography
                variant="small"
                color={sidenavType === 'dark' ? "white" : "blue-gray"}
                className=" font-medium"
              >
                First Name
              </Typography>
              <Input
                type="text"
                placeholder="First Name"
                value={formData.firstname}
                name="firstname"
                onChange={handleChange}
              />
            </div>

            <div>
              <Typography
                variant="small"
                color={sidenavType === 'dark' ? "white" : "blue-gray"}
                className=" font-medium"
              >
                Last Name
              </Typography>
              <Input
                type="text"
                placeholder="Last Name"
                value={formData.lastname}
                name="lastname"
                onChange={handleChange}
              />
            </div>

            <div>
              <Typography
                variant="small"
                color={sidenavType === 'dark' ? "white" : "blue-gray"}
                className=" font-medium"
              >
                Phone
              </Typography>
              <Input
                type="tel"
                placeholder="Mobile Number"
                value={formData.mobilenumber}
                name="mobilenumber"
                onChange={handleChange}
              />
            </div>

            <div>
              <Typography
                variant="small"
                color={sidenavType === 'dark' ? "white" : "blue-gray"}
                className=" font-medium"
              >
                Email
              </Typography>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
            </div>

            <div>
              <Typography
                variant="small"
                color={sidenavType === 'dark' ? "white" : "blue-gray"}
                className=" font-medium"
              >
                Gender
              </Typography>
              <Select
                value={formData.gender}
                onChange={handleChange}
                name="gender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            </div>


            <div>
              <Typography
                variant="small"
                color={sidenavType === 'dark' ? "white" : "blue-gray"}
                className=" font-medium"
              >
                Age
              </Typography>
              <Input
                type="number"
                placeholder="Age"
                value={formData.age}
                name="age"
                onChange={handleChange}
              />
            </div>

            <div>
              <Typography
                variant="small"
                color={sidenavType === 'dark' ? "white" : "blue-gray"}
                className=" font-medium"
              >
                Height
              </Typography>
              <Input
                type="text"
                placeholder="Height"
                value={formData.height}
                name="height"
                onChange={handleChange}
              />
            </div>


            <div>
              <Typography
                variant="small"
                color={sidenavType === 'dark' ? "white" : "blue-gray"}
                className=" font-medium"
              >
                Weight
              </Typography>
              <Input
                type="text"
                placeholder="Weight"
                value={formData.weight}
                name="weight"
                onChange={handleChange}
              />
            </div>


            <div>
              <Typography
                variant="small"
                color={sidenavType === 'dark' ? "white" : "blue-gray"}
                className=" font-medium"
              >
                Proffession
              </Typography>
              <Input
                type="text"
                placeholder="Profession"
                value={formData.proffession}
                name="proffession"
                onChange={handleChange}
              />
            </div>


            <div>
              <Typography
                variant="small"
                color={sidenavType === 'dark' ? "white" : "blue-gray"}
                className=" font-medium"
              >
                Address
              </Typography>
              <Input
                type="text"
                placeholder="Address"
                value={formData.address}
                name="address"
                onChange={handleChange}
              />
            </div>
            <div className=" pt-3 pl-5">
              <Link to="/">
                <Button className={` w-[100%] lg:w-[180px] ${sidenavType === 'dark' ? "bg-red-700" : "bg-black"}`}>Save changes</Button>
              </Link>
            </div>

          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default AddMember;
