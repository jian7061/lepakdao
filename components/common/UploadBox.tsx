import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import React from "react";
import styled from "styled-components";
import { AiFillPicture } from "react-icons/ai";
const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",

  onChange(info: any) {
    const { status } = info.file;

    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }

    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

export const UploadBox = ({ title }: { title: string }) => (
  <Dragger {...props}>
    <Wrapper>
      <AiFillPicture />
      <p>{title}</p>
    </Wrapper>
  </Dragger>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 564px;
  height: 175px;
  color: #403f44;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%236868B4' stroke-width='5' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 15px;
  margin-bottom: 86px;
`;
