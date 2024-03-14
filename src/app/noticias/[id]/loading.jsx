import { Card, Skeleton } from "@nextui-org/react";

function loading() {
  return (
    <>
      <Card className="m-4 2xl:mx-96 mt-[150px] mb-[150px]">
        <Skeleton>
          <h1 className="text-md 2xl:text-2xl font-bold uppercase"></h1>
        </Skeleton>
        <Skeleton>
          <p className="text-slate-500 text-sm 2xl:text-lg mt-20"></p>
        </Skeleton>
        <Skeleton>
          <div className="mt-20">
            <img className="w-auto md:w-1/2 md:float-left me-7 mb-5" />
          </div>
        </Skeleton>

        <Skeleton>
          <p className="text-sm 2xl:text-md whitespace-pre-line h-auto min-h-[800px]"></p>
        </Skeleton>
      </Card>
    </>
  );
}

export default loading;
