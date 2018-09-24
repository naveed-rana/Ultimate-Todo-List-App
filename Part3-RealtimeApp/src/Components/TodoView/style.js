
export const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: "center",
        margin: "auto !important",

    },


    todoItem: {
        width: "85%",
        borderRadius: "40px !important",
        // padding: "5px",
        backgroundColor: "white",
        marginTop: "10px",
        marginBottom: "10px !important",
        marginLeft:"10px"
    },
    manus: {
        textAlign: "right",
       
    },
    listHeading: {
        color: "white",
        fontFamily: 'Raleway',
    },
    checkbox: {
        color: "#ff3366",
        borderRadius: "100%",
        textAlign: "left"
    },
   
    checkboxGrid: {
        textAlign: "left",
        maxWidth: "6% !important"
      
    },
    absolute: {
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        //right: theme.spacing.unit * 3,
        backgroundColor: "white",
        marginBottom: "5% !important",
        margin: "auto",
        width: "60px",
        height: "60px",
        right: "0% !important",
        marginRight: "39%",
    },
  
    description: {
        textAlign: "left",
        fontFamily: "Raleway",
        marginTop: "5px"
    },
   
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },

      expansionSummary: {
          margin: "0px !important",
          padding: "0px",
          height: "30px"
      },
      manuBtn:{
        padding: "0px !important"
      },
      todoPanel: {
          paddingRight: "8px !important",
          paddingLeft: "8px !important",
          height: "30px !important"

      },
      searchIcon: {
          width: "20px"
      },
      searchBar: {
          width: "5%"
      },
      DrawerGrid: {
          position: "absolute"
      },
      manuList: {
          padding: "0px !important"
      },
      primary: {
          paddingLeft: "10px !important"
      }
});