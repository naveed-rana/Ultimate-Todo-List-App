
export const styles = theme => ({
    root: {
        flexGrow: 1,
       textAlign: "center",
        width: '100%',
        backgroundColor: "#ff3366",
        height: '100vh',
        
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: "center",
        margin: "auto"
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
      },
      menu: {
        width: 200,
      },
      FormHeader: {
          color: "white"
      },
      button: {
        margin: theme.spacing.unit,
        width: "50%",
        backgroundColor: "white !important",
        marginTop: "22% !important"

      },
      
      backArrow: {
        width:"20px"
      },
      editIcon :{
        borderRadius: "100%"
      },
      iconDiv : {
        marginTop: "5%"
      },
      icon: {
        paddingTop: "10px"
      },
      inputs: {
        color: "white"
      },
      floatingLabelFocusStyle: {
        color: "white"
    },
    underline: {
      '&:after': {
        borderBottom: '2px solid white',
      }
    },

})





