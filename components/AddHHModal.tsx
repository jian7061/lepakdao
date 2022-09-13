import styled from "styled-components";
import { BigNumber, utils } from "ethers";
import { useState } from "react";
import { CustomModal } from "./modal/index";
import { PrimaryButton } from "./common/PrimaryButton";
import { FormInput } from "./common/FormInput";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { UploadBox } from "./common/UploadBox";
export default function AddHHModal({
  isOpen,
  onClose,
  id,
}: {
  isOpen: boolean;
  onClose: () => void;
  id: any;
}) {
  const { address, isConnected, connector } = useAccount();
  const [value, setValue] = useState<any>();
  const [buttonMsg, setButtonMsg] = useState<any>("Join");
  const [name, setName] = useState<string>("");
  const [slots, setSlots] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [city, setCity] = useState<string>("");
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
    <CustomModal title="Add new hh" isOpen={isOpen} onClose={onClose}>
      <FormInputContainer>
        <AmountFormInput
          placeholder="Name"
          value={name}
          onChange={onChangeValue}
        />
        <AmountFormInput
          placeholder="Slots"
          value={slots}
          onChange={onChangeValue}
        />
      </FormInputContainer>
      <FormInputContainer>
        <AmountFormInput
          placeholder="Duration"
          value={duration}
          onChange={onChangeValue}
        />
        <AmountFormInput
          placeholder="City"
          value={city}
          onChange={onChangeValue}
        />
      </FormInputContainer>
      <AmountFormInput
        placeholder="Description"
        value={description}
        onChange={onChangeValue}
      />
      <UploadBox title="Drop Images" />
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
