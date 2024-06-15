import React from "react";

const PetCard = ({
  breed,
  age,
  gender,
  weight,
  immunisation,
  disease,
  insuranceDate,
  insuranceValue,
}) => {
  return (
    <div className="flex flex-col justify-center font-bold text-black bg-white w-100 p-6 m-4 rounded-xl shadow-lg">
      <div className="flex flex-col w-full bg-white rounded-xl">
        <img
          src="/goat.png"
          alt="Pet"
          className="w-full h-60 object-cover rounded-t-xl"
        />
        <div className="py-4">
          <div className="self-center mt-4 text-3xl text-center">{breed}</div>
          <div className="flex flex-col px-7 mt-4 w-full text-xl">
            <div className="flex justify-between mt-6">
              <div>Age: {age}</div>
              <div>Weight: {weight}</div>
            </div>
            <div className="flex justify-between mt-4">
              <div>Gender: {gender}</div>
              <div>Disease: {disease}</div>
            </div>
            <div className="mt-6">Immunisation: {immunisation}</div>
            <div className="mt-4">
              Insured for &#8377;{insuranceValue} till {insuranceDate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Current_List = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <PetCard
        breed="Labrador Retriever"
        age="2 years"
        gender="Male"
        weight="25kg"
        immunisation="Up to date"
        disease="None"
        insuranceDate="01/01/2022"
        insuranceValue="1000"
      />
      <PetCard
        breed="Golden Retriever"
        age="4 years"
        gender="Female"
        weight="30kg"
        immunisation="Pending"
        disease="Arthritis"
        insuranceDate="03/15/2022"
        insuranceValue="1200"
      />
      <PetCard
        breed="Labrador Retriever"
        age="2 years"
        gender="Male"
        weight="25kg"
        immunisation="Up to date"
        disease="None"
        insuranceDate="01/01/2022"
        insuranceValue="1000"
      />
      <PetCard
        breed="Golden Retriever"
        age="4 years"
        gender="Female"
        weight="30kg"
        immunisation="Pending"
        disease="Arthritis"
        insuranceDate="03/15/2022"
        insuranceValue="1200"
      />
      <PetCard
        breed="Labrador Retriever"
        age="2 years"
        gender="Male"
        weight="25kg"
        immunisation="Up to date"
        disease="None"
        insuranceDate="01/01/2022"
        insuranceValue="1000"
      />
      <PetCard
        breed="Golden Retriever"
        age="4 years"
        gender="Female"
        weight="30kg"
        immunisation="Pending"
        disease="Arthritis"
        insuranceDate="03/15/2022"
        insuranceValue="1200"
      />
      <PetCard
        breed="Labrador Retriever"
        age="2 years"
        gender="Male"
        weight="25kg"
        immunisation="Up to date"
        disease="None"
        insuranceDate="01/01/2022"
        insuranceValue="1000"
      />
      <PetCard
        breed="Golden Retriever"
        age="4 years"
        gender="Female"
        weight="30kg"
        immunisation="Pending"
        disease="Arthritis"
        insuranceDate="03/15/2022"
        insuranceValue="1200"
      />
    </div>
  );
};

export default Current_List;
