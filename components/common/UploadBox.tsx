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
  border: 3px dotted white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 1rem 0;
`;
