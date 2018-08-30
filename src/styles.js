const container = {
  padding: "2em",
  width: "100%",
  maxWidth: "80em",
  margin: "auto",
  boxSizing: "border-box",
};

const styles = {
  container,
  mediumContainer: {
    ...container,
    maxWidth: "47em",
  },
  smallContainer: {
    ...container,
    maxWidth: "40em",
  },
  fab: theme => ({
    position: "fixed",
    margin: theme.spacing.unit*4,
    bottom: 0,
    right: 0,
  }),
};

export default styles;