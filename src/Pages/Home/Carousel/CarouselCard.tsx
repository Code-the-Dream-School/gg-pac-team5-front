import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { FC, useEffect, useState } from "react"
// import Container from "@mui/material/Container"
// import Box from "@mui/material/Box"
// import Paper from "@mui/material/Paper"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import { useTheme } from "@mui/material/styles"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

interface CardProp {
  content: number
}

const imgs = {
  1: "/Home/carousel_backup_1.jpg",
  2: "/Home/carousel_backup_2.jpg",
  3: "/Home/carousel_backup_3.jpg",
  4: "/Home/carousel_backup_4.jpg",
  5: "/Home/carousel_backup_5.jpg",
}

const CarouselCard: FC<CardProp> = ({
  content: { img, name, street, city, state, zip },
}) => {
  const [showOverlay, setShowOverlay] = useState(false)
  const theme = useTheme()
  const [imgSrc, setImgSrc] = useState()

  useEffect(
    () => setImgSrc(img ? img : imgs[Math.floor(Math.random() * 5) + 1]),
    []
  )

  return (
    <motion.div
      className="card-wrapper"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          minWidth: "100%",
          maxHeight: "100%",
          maxWidth: "100%",
          objectFit: "cover",
          backgroundColor: theme.palette.primary.light,
        }}
      >
        <CardMedia
          component="img"
          alt={"Business: " + name}
          image={imgSrc}
          sx={{
            flexGrow: 1,
            width: "100%",
            objectFit: "cover",
          }}
        />
        <CardContent
          sx={{
            minHeight: "30%",
            minWidth: "100%",
            maxHeight: "30%",
            maxWidth: "100%",
            overflow: "hidden",
          }}
        >
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            {`Address: ${street}`}
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            {`${city}, ${state}, ${zip}`}
          </Typography>
        </CardContent>
      </Card>
      {/* animate presence will re-animate.
            what was faded in on hover
            will be faded out on mouse leave

            animate presence must be stated before condition not in it

            It will track when the element leaves the dom 
            and repeats the animation based on exit property */}
      <AnimatePresence>
        {showOverlay && (
          <Link to={`pages/${name}`}>
            {/* fade in effect */}
            <motion.div
              className="card-overlay-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div className="card-overlay-container">
                {/* bouncing effect for button */}
                <motion.div
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                  exit={{ y: 10 }}
                  className="card-button"
                  style={{
                    backgroundColor: theme.palette.primary.main,
                  }}
                >
                  Discover More
                </motion.div>
              </motion.div>
            </motion.div>
          </Link>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export { CarouselCard }
