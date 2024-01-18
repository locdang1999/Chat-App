import { InputSelectIcon } from "./CustomIcons";

const Select = () => {
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: InputSelectIcon,
      },
    },
  };
};

export default Select;
