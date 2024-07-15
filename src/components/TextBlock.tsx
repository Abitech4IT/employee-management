import { Stack, Typography } from "@mui/material";

interface TextBlockProps {
  primaryText?: string;
  secondaryText?: string | number | null;
  switch?: boolean;
}

function TextBlock(props: TextBlockProps) {
  return (
    <Stack direction={"column"}>
      <Typography fontSize={13} fontWeight={props.switch ? "bold" : "normal"}>
        {props.primaryText}
      </Typography>
      <Typography
        fontSize={13}
        color={props.switch ? "#71717A" : ""}
        fontWeight={props.switch ? "normal" : "bold"}
      >
        {props.secondaryText}
      </Typography>
    </Stack>
  );
}

export default TextBlock;
