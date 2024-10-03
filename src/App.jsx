import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/MoonIcon";

const App = () => {
    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-200 min-h-screen">
            <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className="uppercase text-white text-2xl font-bold tracking-[0.3em]">
                        Todo
                    </h1>
                    <button>
                        <MoonIcon className="fill-red-500" />
                    </button>
                </div>

                <form className="flex bg-white rounded-md overflow-hidden py-3 gap-6 items-center px-4 mt-8">
                    <span className="rounded-full border-2 h-5 w-5 inline-block"></span>
                    <input
                        type="text"
                        className="w-full text-gray-400 outline-none"
                        placeholder="Create a new todo..."
                    />
                </form>
            </header>

            <main className="container mx-auto px-4 mt-8">
                <div className="bg-white rounded-md [&>article]:p-4">
                    <article className="flex pt-4 border-b-gray-300 border-b">
                        <button className="rounded-full border-2 h-5 w-5 inline-block"></button>
                        <p className="text-gray-600 flex-auto px-4">
                            Completado curso javascrit
                        </p>
                        <button>
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex pt-4 border-b-gray-300 border-b">
                        <button className="rounded-full border-2 h-5 w-5 inline-block"></button>
                        <p className="text-gray-600 flex-auto px-4">
                            Completado curso javascrit
                        </p>
                        <button>
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex pt-4 border-b-gray-300 border-b">
                        <button className="rounded-full border-2 h-5 w-5 inline-block"></button>
                        <p className="text-gray-600 flex-auto px-4">
                            Completado curso javascrit
                        </p>
                        <button>
                            <CrossIcon />
                        </button>
                    </article>

                    <section className="py-4 px-4 flex justify-between">
                        <span className="text-gray-400">5 items left</span>
                        <button className="text-gray-400">
                            Clear completed
                        </button>
                    </section>
                </div>
            </main>

            <section className="container mx-auto px-4 mt-8">
                <div className="bg-white p-4 rounded-md flex justify-center gap-4">
                    <button className="text-blue-600 font-bold">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>

            <p className="text-center mt-8 text-gray-500">
                Drag and drop to reorder list
            </p>
        </div>
    );
};

export default App;
