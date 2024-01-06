export const useUtils = () => {
    const sayHello = (name) => {
        console.log("Hello there Mr. ",name) 
    }
    return {
        sayHello
    }
}