import React from "react";
import PropTypes from "prop-types";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "#fff",
    margin: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const MuiButtons = ({ tasks, urls, onClick }) => {
  const classes = useStyles();

  const handleButtonClick = (envUrlKey) => (event) => {
    const url = urls[envUrlKey] || "";

    onClick(url, event);
  };

  return (
    <div>
      {tasks.map((task) => (
        <Button
          key={task.envUrlKey}
          className={classes.button}
          style={{ backgroundColor: task.bgColorCode }}
          onClick={handleButtonClick(task.envUrlKey)}
          startIcon={<i className={`fa ${task.icon}`} />}
        >
          {task.name}
        </Button>
      ))}
    </div>
  );
};

MuiButtons.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      envUrlKey: PropTypes.string.isRequired,
      bgColorCode: PropTypes.string,
    })
  ).isRequired,
  urls: PropTypes.object.isRequired, // Expecting an object of URLs
  onClick: PropTypes.func.isRequired,
};

export default MuiButtons;
