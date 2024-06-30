export const revalidate = 0;
import WebInformation from "@/DasComponent/Forms/WebInformation";
// import { PrismaClient } from "@prisma/client";
import React from "react";
import prisma from "@/utils/prisma";

async function getData() {
  try {
    // const prisma = new PrismaClient();
    const result = await prisma.Web_information.findFirst({});
    return result;
  } catch (error) {
    console.log(error);
  }
}

const page = async () => {
  const data = await getData();
  return (
    <div>
      <WebInformation data={data} />
    </div>
  );
};

export default page;