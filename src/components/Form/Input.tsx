import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import { FieldError } from "react-hook-form";
import {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useEffect,
  useState,
} from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
}

type inputVariationOptions = {
  [key: string]: string;
};

const inputVariation: inputVariationOptions = {
  error: "negative",
  default: "gray.0",
  focus: "gray.600",
  filled: "sucess",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, icon: Icon, ...rest },
  ref
) => {
  const [value, setValue] = useState("");
  const [variation, setVariaton] = useState("default");

  useEffect(() => {
    if (error) {
      setVariaton("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      setVariaton("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      setVariaton("filled");
    }
  }, [error, value]);

  return (
    <FormControl>
      {!!label && <FormLabel>{label}</FormLabel>}

      <InputGroup flexDirection="column">
        {Icon && <InputRightElement></InputRightElement>}

        <ChakraInput
          id={name}
          name={name}
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          onBlurCapture={handleInputBlur}
          onFocus={handleInputFocus}
          borderColor={inputVariation[variation]}
          color={inputVariation[variation]}
          ref={ref}
          _placeholder={{ color: "gray.300" }}
          h="60px"
          {...rest}
        />
        {!!error && (
          <FormErrorMessage color="negative">{error.message}</FormErrorMessage>
        )}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
