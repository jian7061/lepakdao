import styled from "styled-components";

type SocialMediaProps = {
  name: string;
  link: string;
  icon: any;
};

export type UserProps = {
  image: string;
  name: string;
  role: string;
  socialMedia: SocialMediaProps[];
};

export default function Profile({ user }: { user: UserProps }) {
  return (
    <Wrapper>
      <ProfilePictureWrapper>
        <ProfilePicture src={user.image} />
      </ProfilePictureWrapper>
      <NameContainer>
        <Name>{user.name}</Name>
        <Role>{user.role}</Role>
      </NameContainer>
      <SocialMediaContainer>
        {user.socialMedia.map((item) => (
          <SocialMediaItem
            key={item.name}
            onClick={() => {
              window.open(item.link);
            }}
          >
            {item.icon}
          </SocialMediaItem>
        ))}
      </SocialMediaContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const ProfilePictureWrapper = styled.div`
  display: flex;
  width: 208px;
  height: 208px;
  object-fit: cover;
  border-radius: 0.5rem;
  overflow: hidden;
  align-items: center;
  background: #f2f2f2;
`;

const ProfilePicture = styled.img`
  width: 100%;
`;
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div``;

const Role = styled.div``;

const SocialMediaContainer = styled.div`
  display: flex;
  margin-left: 1rem;
`;

const SocialMediaItem = styled.div`
  font-size: 1.3rem;
  margin-right: 1.3rem;
  &:hover {
    cursor: pointer;
  }
`;
