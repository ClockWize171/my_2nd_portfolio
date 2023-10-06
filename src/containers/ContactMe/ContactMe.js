import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import {
    Box,
    Container,
    Text,
    useMediaQuery,
    Input,
    FormControl,
    FormLabel,
    Alert,
    AlertIcon,
    Textarea,
    Stack,
    Button,
    useColorModeValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { IoSend } from "react-icons/io5";
import ReCAPTCHA from 'react-google-recaptcha';
import { ReactComponent as PaperPlane } from '../../assets/images/paper_plane_black.svg'

const ContactMe = ({ title }) => {

    useEffect(() => { document.title = title }, [title])

    const intialFormState = {
        email: '',
        name: '',
        message: '',
    }
    const [formState, setFormState] = useState(intialFormState)
    const [submitting, setSubmitting] = useState(false)
    const [message, setMessage] = useState()
    const [recaptchaToken, setRecaptchaToken] = useState();

    // Screen Size
    const [isNotSmallerScreen] = useMediaQuery([
        "(min-width: 1000px)",
        "(min-width:588px)"
    ]);
    const recaptchaKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
    const recaptchaRef = useRef();
    const formSparkUrl = `https://submit-form.com/${process.env.REACT_APP_FORMSPARK_ID}`

    const formSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        await postSubmission();
        if (recaptchaToken === undefined) {
            setMessage({
                status: 'error',
                text: 'Please verify recaptcha!'
            })
        }
        setSubmitting(false)

    }

    const postSubmission = async () => {
        const payload = {
            ...formState,
            "g-recaptcha-response": recaptchaToken,
        }
        try {
            await axios.post(formSparkUrl, payload);
            setMessage({
                status: 'success',
                text: 'Your message is successfully sent!'
            })
            setFormState(intialFormState);
            recaptchaRef.current.reset();
        } catch (error) {
            setMessage({
                status: 'error',
                text: 'Oops! Something went wrong.'
            })
            console.log(error)
        }
    }

    const updateFormControl = (e) => {
        const { id, value } = e.target
        const formKey = id;
        const updateFormState = { ...formState }
        updateFormState[formKey] = value
        setFormState(updateFormState)
    }

    const updateRecaptchaToken = (token) => {
        setRecaptchaToken(token)
    }

    return (
        <Container paddingTop={6} maxW="container.lg">
            <Box align='center'>
                <Text
                    fontWeight="bold"
                    fontSize={isNotSmallerScreen ? "2xl" : "xl"}>
                    Contact Me.
                </Text>
            </Box>
            <motion.div
                viewport={{ once: true }}
                whileInView={{ y: [100, 0], opacity: [0, 1] }}>
                <Stack w={isNotSmallerScreen ? '50%' : 'full'} m='auto' mt={5} borderWidth='1px' borderRadius='lg'>
                    <form onSubmit={formSubmit}>
                        <FormControl p={8} >
                            {
                                message &&
                                <Alert status={message.status} variant='left-accent' >
                                    <AlertIcon />
                                    {message.text}
                                </Alert>
                            }
                            <Box
                                pointerEvents='none'
                                m='auto'>
                                <PaperPlane
                                    fill={useColorModeValue('#00B5D8', '#76E4F7')}
                                    style={{ height: '8rem' }} />
                            </Box>
                            <Text
                                align='center'
                                fontWeight='semibold'
                                fontSize={isNotSmallerScreen ? "lg" : "md"}>
                                Get in Touch.
                            </Text>

                            <FormLabel mt={5} htmlFor='email'>Email address</FormLabel>
                            <Input isRequired
                                onChange={updateFormControl}
                                value={formState.email}
                                id='email'
                                type='email' />

                            <FormLabel mt={5} htmlFor='name'>Name</FormLabel>
                            <Input isRequired
                                onChange={updateFormControl}
                                value={formState.name}
                                id='name'
                                type='name' />

                            <FormLabel mt={5} htmlFor='message'>Message</FormLabel>
                            <Textarea isRequired
                                onChange={updateFormControl}
                                value={formState.message}
                                id='message'
                                type='message' />

                            <Box mt={5}>
                                <ReCAPTCHA
                                    style={{ transform: isNotSmallerScreen ? "scale(0.99)" : "scale(0.75)", transformOrigin: "0 0" }}
                                    ref={recaptchaRef}
                                    sitekey={recaptchaKey}
                                    onChange={updateRecaptchaToken}
                                />
                            </Box>


                            <motion.div
                                style={{
                                    width: '165px'
                                }}
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.05 }}>
                                <Button
                                    mt={isNotSmallerScreen ? 4 : 5}
                                    isLoading={submitting}
                                    loadingText='Sending...'
                                    type='submit'
                                    w="full"
                                    borderRadius="sm"
                                    variant='outline'
                                    colorScheme="cyan"
                                    rightIcon={<IoSend />}>
                                    Send
                                </Button>
                            </motion.div>
                        </FormControl>
                    </form>
                </Stack>
            </motion.div>
        </Container>
    )
}

export default ContactMe