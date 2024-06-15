export default function Error500InternalServerError() {
  return (
    <div className="max-w-[500px] mx-auto px-2 my-4">
      <h1 className="text-[22px] font-medium">Wystąpił problem</h1>
      <div className="mt-2">Wystąpił błąd z pobraniem danych do strony</div>
    </div>
  );
}
