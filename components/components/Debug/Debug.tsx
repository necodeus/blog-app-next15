export const Debug = (props: any) => {
    const dataJsonString = JSON.stringify(props, null, 2);

    return <div className="whitespace-pre bg-[red]">
        { dataJsonString }
    </div>
}
