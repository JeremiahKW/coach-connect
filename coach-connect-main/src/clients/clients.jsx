export const clientListItem = ({ client }) => {
    const { name, age, race, goal } = client;

    return (
        <div className="rounded-lg mx-auto bg-pale-green h-fit w-3/5 mt-12 mb-12 shadow-xl">
            <h1 className="flex justify-center text-xl text-black font-bold mx-auto bg-transparent">{name}</h1>
            <p className="flex justify-center text-black mx-auto bg-transparent">Age: {age} years</p>
            <p className="flex justify-center text-black mx-auto bg-transparent">Race: {race}</p>
            <p className="flex justify-center text-black mx-auto bg-transparent">Goal: {goal}</p>
        </div>
    )
}