import styled from "styled-components";
import { BigNumber, utils } from "ethers";
import { useState } from "react";
import { CustomModal } from "./modal/index";
import { PrimaryButton } from "./common/PrimaryButton";
import { FormInput } from "./common/FormInput";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { UploadBox } from "./common/UploadBox";
import { RiArrowDownSLine } from "react-icons/ri";

export default function AddLiveStreamModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { address, isConnected, connector } = useAccount();
  const [value, setValue] = useState<any>();
  const [buttonMsg, setButtonMsg] = useState<any>("Join");
  const [name, setName] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [hosts, setHosts] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [parsedValue, setParsedValue] = useState<any>();
  const onChangeValue = (e: any) => {
    if (e.target.value.toString() != "")
      setParsedValue(utils.parseEther(e.target.value.toString()));
  };
  const onDonateSubmit = async () => {
    setButtonMsg("Loading...");
    // const Account = await connector?.account();
    // const balance =
    //   await // const finalBalance = uint256ToBN(balance[0]).toString();

    //   // await
    setButtonMsg("Join");
  };
  return (
    <CustomModal title="Add new livestream" isOpen={isOpen} onClose={onClose}>
      <AmountFormInput
        placeholder="Name"
        value={name}
        onChange={onChangeValue}
      />
      <FormInputContainer>
        <AmountFormInput
          placeholder="Start Time"
          value={startTime}
          onChange={onChangeValue}
        />
        <AmountFormInput
          placeholder="Hosts"
          value={hosts}
          onChange={onChangeValue}
        />
      </FormInputContainer>
      <AmountFormInput
        placeholder="Description"
        value={description}
        onChange={onChangeValue}
      />
      <UploadBox title="Drop thumbnail" />
      <PrimaryButton onClick={onDonateSubmit}>{buttonMsg}</PrimaryButton>
    </CustomModal>
  );
}

const FormInputContainer = styled.div`
  display: flex;
`;

const AmountFormInput = styled(FormInput)`
  margin-bottom: 0.5rem;
`;
