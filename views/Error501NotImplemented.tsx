export default function Error501NotImplemented(props: any) {
  const jsonData = JSON.stringify(props, null, 4);

  return (
    <div className="max-w-[500px] mx-auto px-2 my-4">
      <h1 className="text-[22px] font-medium">Wystąpił problem</h1>
      <div className="mt-2">Strona pod tym adresem istnieje, lecz jej widok nie został zaimplementowany</div>
      <h2 className="mt-2 text-[14px] font-medium">Dane do strony:</h2>
      <div className="mt-2 text-[14px] max-w-[500px] bg-[#ddd] whitespace-pre p-4 rounded-[10px] overflow-x-auto">{ jsonData }</div>
    </div>
  );
}
