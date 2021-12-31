import React from "react";
function Loader() {
  return (
    <div className="border border-primary h-96 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse  space-x-4">
        <div className="rounded bg-gray-700 h-56 w-full"></div>
        <div className="flex-1 space-y-6 py-10">
          <div className="h-2 bg-gray-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-gray-700 rounded col-span-2"></div>
              <div className="h-2 bg-gray-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
