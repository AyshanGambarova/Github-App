import React from "react";
import {Controller, FieldValues, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
    Button,
    Flex,
    Input,
    InputGroup,
    Field
} from "@chakra-ui/react";
import {LuUser} from "react-icons/lu";
import {AiOutlineSearch} from "react-icons/ai";
import {useUsernameStore} from "@/stores/user";
import {useNavigate} from "react-router-dom";
import {useColorModeValue} from "@/components/ui/color-mode";

const formSchema = yup.object({
    username: yup.string().required("Username is required."),
});

type FormValues = {
    username: string;
};

const SearchForm: React.FC = () => {
    const username = useUsernameStore((state) => state.username);
    const setUsername = useUsernameStore((state) => state.setUsername);
    const navigate = useNavigate();

    const modeColor = useColorModeValue("gray.900", "gray.200");

    const {
        control,
        handleSubmit,
        formState: {errors, isSubmitting, isValid},
    } = useForm<FormValues>({
        resolver: yupResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
            username,
        },
    });

    const onSubmit = (data: FormValues) => {
        const trimmedUsername = data.username.trim();
        if (!trimmedUsername) return;
        setUsername(trimmedUsername);
        navigate(`/result/${trimmedUsername}`);
    };

    const onError = (errors: FieldValues) => {
        console.log("Form validation errors:", errors);
    };

    return (
        <Flex as="form" gap={2}>
            <Field.Root mb={3} invalid={!!errors.username}>
                <Controller
                    name="username"
                    control={control}
                    render={({field}: { field: any }) => (
                        <InputGroup startElement={<LuUser/>}>
                            <Input
                                placeholder="Enter GitHub username"
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                            />
                        </InputGroup>
                    )}
                />
                {errors.username && <Field.ErrorText>{errors.username?.message}</Field.ErrorText>}
            </Field.Root>
            <Button type="submit" colorScheme="teal" onClick={handleSubmit(onSubmit, onError)}
                    loading={isSubmitting} bgColor={modeColor} disabled={!isValid}>
                Search <AiOutlineSearch style={{marginLeft: 6}}/>
            </Button>
        </Flex>

    );
};

export default SearchForm;
