import { useState } from "react";
import CustomInput from "../components/CustomInput";
import Layout from "../components/layout";

const CreateUser = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [maidenName, setMaidenName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [file, setfile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const image = file ? URL.createObjectURL(file) : "";

    const payload = {
      firstName,
      maidenName,
      lastName,
      email,
      image,
      address: {
        address,
        state,
        city,
      },
      company: {
        name: companyName,
      },
    };

    console.log(payload);
  };

  return (
    <Layout>
      <section className="container">
        <div className="mx-auto max-w-3xl ">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
              <CustomInput
                name="firstName"
                id="firstName"
                type="text"
                placeholder="Enter first name"
                required={true}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <CustomInput
                name="maidenName"
                id="maidenName"
                type="text"
                placeholder="Enter maiden name"
                required={false}
                value={maidenName}
                onChange={(e) => setMaidenName(e.target.value)}
              />
              <CustomInput
                name="lastName"
                id="lastName"
                type="text"
                placeholder="Enter last name"
                required={true}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="mt-5 grid gap-5 grid-cols-1 md:grid-cols-2">
              <CustomInput
                name="email"
                id="email"
                type="email"
                placeholder="Enter email"
                required={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <CustomInput
                name="companyName"
                id="companyName"
                placeholder="Enter company name"
                required={true}
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="mt-5 grid gap-5 grid-cols-1 md:grid-cols-3">
              <CustomInput
                name="address"
                id="address"
                type="text"
                placeholder="Enter street address"
                required={true}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <CustomInput
                name="state"
                id="state"
                type="text"
                placeholder="Enter state"
                required={true}
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <CustomInput
                name="city"
                id="city"
                type="text"
                placeholder="Enter city"
                required={true}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="mt-5">
              <input
                name="image"
                id="image"
                type="file"
                required={true}
                accept="image/png, image/jpeg, image/jpg"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setfile(e.target.files[0]);
                  }
                }}
              />
            </div>

            <button
              type="submit"
              className="inline-flex text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
            >
              Add User
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default CreateUser;
