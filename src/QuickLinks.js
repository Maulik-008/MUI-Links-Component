import React, { useMemo, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Box, Button, Divider, Typography } from "@material-ui/core";

// Define custom styles using makeStyles
const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 300,
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 7px 16px rgba(0, 0, 0, 0.2)",
    position: "relative",
  },
  list: {
    maxHeight: 400,
    overflowY: "auto",
    scrollbarWidth: "thin", // For Firefox
    scrollbarColor: "#888 #f5f5f5", // For Firefox
  },
  listItem: {
    padding: "10px 16px",
  },
  listItemText: {
    fontSize: "16px",
  },
  divider: {
    height: 2,
    backgroundColor: "#0000008c",
  },
  showMoreButton: {
    textAlign: "center",
    margin: "10px 0",
  },
  titleName: { fontSize: "24px", fontWeight: 500 },
});

const QuickLinks = ({ links = [], titleName = "Quick Links" }) => {
  const classes = useStyles();
  const [showAll, setShowAll] = useState(false);

  // Toggle the showAll state to either show all links or limit to the first 7 links
  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  // Memoize the displayed links to optimize performance
  const displayedLinks = useMemo(() => {
    return showAll ? links : links.slice(0, 7);
  }, [showAll, links]);

  return (
    <Box className={classes.root}>
      <Box padding={2}>
        <Typography className={classes.titleName} component="div">
          {titleName}
        </Typography>
      </Box>
      <Divider className={classes.divider} />
      <>
        <List
          component="nav"
          className={`${classes.list} ${classes.scrollbar}`}
        >
          {displayedLinks && displayedLinks.length > 0 ? (
            displayedLinks.map((element) => (
              <ListItem
                button
                component="a"
                href={element.link} // Use href attribute for navigation
                key={element.title} // Use title as key for unique identification
                className={classes.listItem}
              >
                <ListItemText
                  primary={element.title}
                  classes={{ primary: classes.listItemText }}
                />
              </ListItem>
            ))
          ) : (
            <></>
          )}
        </List>
        {links.length > 7 ? (
          // Show "Show More" or "Show Less" button based on the showAll state
          <Box className={classes.showMoreButton}>
            <Button onClick={handleShowMore} color="primary">
              {showAll ? "Show Less" : "Show More"}
            </Button>
          </Box>
        ) : (
          <></>
        )}
      </>
    </Box>
  );
};

export default QuickLinks;
