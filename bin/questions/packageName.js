export default () => {
    return {
        type:"input",
        name:"packageName",
        message: "input your project name",
        validate(val) {
            if (val && val.trim()) {
                return true
            }
            return "please enter your project name"
        }
    }
}