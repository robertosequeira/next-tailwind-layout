export default function PlaygroundPage() {
  return (
    <div className="h-full p-2">
      <h1 className="text-4xl font-bold">
        Welcome to the playground!
      </h1>


      <h2 className="text-2xl font-bold mt-8">
        Card
      </h2>

      {/*
        color for borders is #797979
        borders are 2px solid
        shadow is 2px in x and 4px in y with blur of 0 and spread of 0
      */}

      <div className='h-[160px] w-[300px]'>

        <div className="shadow shadow-black hover:shadow-lg">
          <div className="px-4 py-5 sm:p-6">
            lorem ipsum
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border-2 border-neutral-500">
          <div className="px-4 py-5 sm:p-6">
            lorem ipsum
          </div>
        </div>
      </div>





    </div>
  );
}
