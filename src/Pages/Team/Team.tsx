import Container from "@mui/material/Container"
import { AvatarItem } from "./AvatarItem"
import { Typography } from "@mui/material"

const Team = () => {
  return (
    <>
      <Typography variant="h3" sx={{ m: "5rem auto", textAlign: "center" }}>
        Mighty Heap
      </Typography>
      <Container
        sx={{
          display: "flex",
          margin: "0 5rem",
          gap: "3rem",
          flexWrap: "wrap",
          maxWidth: "100vw",
        }}
      >
        <AvatarItem
          teamMemberInfo={{
            teamMemberName: "Volodymyr Pisotskyi",
            position: "Full-Stack",
            avatarUrl: "/team/vlad.jpg",
            link: "/",
            linkedIn: "https://www.linkedin.com/in/vpisotski/",
          }}
        />
        <AvatarItem
          teamMemberInfo={{
            teamMemberName: "Anuja Bujurge",
            position: "Full-Stack",
            avatarUrl: "/team/Anuja.jpg",
            link: "/",
            linkedIn: "https://www.linkedin.com/in/anuja-bujurge/",
          }}
        />{" "}
        <AvatarItem
          teamMemberInfo={{
            teamMemberName: "Jeffrey Cheung",
            position: "Full-Stack",
            avatarUrl: "/team/jeff.jpg",
            link: "/",
            linkedIn: "https://www.linkedin.com/in/cheung-k-jeffrey/",
          }}
        />{" "}
        <AvatarItem
          teamMemberInfo={{
            teamMemberName: "",
            position: "",
            avatarUrl: "",
            link: "/",
            linkedIn: "",
          }}
        />
      </Container>
    </>
  )
}

export { Team }
