export async function editProfileAction(prevState, formData) {
    await new Promise(res => setTimeout(res, 1000))

    return {
        success: !prevState.success,
        errors: ['Błędny email'],
        values: {
            email: formData.get('email'),
            password: formData.get('password')
        }
    }
}