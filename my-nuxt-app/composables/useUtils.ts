export const useUtils = () => {
	const sayHello = (name) => console.log(name);
	return {
		sayHello,
	};
};
