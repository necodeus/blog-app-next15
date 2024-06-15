export const Debug = (props: any) => {
    const dataJsonString = JSON.stringify(props, null, 2);

    // return null;

    return <div className="whitespace-pre bg-[red]">
        { dataJsonString }
    </div>
}
