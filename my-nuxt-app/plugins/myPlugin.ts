export default defineNuxtPlugin((nuxtApp) => {
	return {
		provide: {
			sayHello: (msg: string) => console.log(`Hello ${msg} from Plugin!`),
			writeHello: (msg: string) => `Hello ${msg} from Plugin`,
		},
	};
});
