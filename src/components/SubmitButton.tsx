interface Props {
    text: string,
    onClick: () => void
}

const SubmitButton: React.FC<Props> = ({text, onClick}) => {
    return(
        <button
            onClick={onClick}
            type="submit"
            className="group w-full flex justify-center p-4 border border-transparent text-sm font-medium rounded-none text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >{text}</button>
    )
}

export default SubmitButton