import { Button } from "@mui/material";
import { Box } from "@mui/system";
export const Pagination = ({
  currentPage,
  setCurrentPage,
  allUsers,
  maxItems,
}) => {
  const changePage = (string) => {
    if (string == "back") {
      setCurrentPage(currentPage - 1);
    } else if (string == "next") {
      setCurrentPage(currentPage + 1);
    }
  };

  const backDisabled = () => {
    if (currentPage >= 1) return true;
    else return false;
  };
  const nextDisabled = () => {
    if (allUsers.length - 1 > currentPage * maxItems) return false;
    else return true;
  };

  return (
    <Box
      sx={{
        width: 50,
        display: "flex",
        flexDirection: "row",
        alignSelf: "flex-start",
        marginTop: 1,
        marginBottom: 2,
      }}
    >
      <Button
        variant="contained"
        disabled={backDisabled()}
        onClick={() => changePage("back")}
        sx={{
          width: 50,
          marginTop: 1,
          marginBottom: 2,
          marginRight: 1,
        }}
      >
        Ant
      </Button>
      <Button
        variant="contained"
        disabled={nextDisabled()}
        onClick={() => changePage("next")}
        sx={{
          width: 50,
          marginTop: 1,
          marginBottom: 2,
        }}
      >
        Sig
      </Button>
    </Box>
  );
};
