import { toast } from "react-hot-toast";
import { HiCheckCircle, HiXMark } from "react-icons/hi2";

function Toast(type, message) {
  // Implement the code for applying Tailwind Styles with Object Lookup it should have info, success and error

  toast.custom(
    (t) => (
      <div
        style={{
          opacity: t.visible ? 1 : 0,
          transition: "opacity 100ms ease-in-out",
        }}
        className={`${type === "success" ? "bg-green-50" : "bg-red-50"} p-4`}
      >
        <div className="flex">
          <div className="flex-shrink-0">
            <HiCheckCircle
              className={`h-5 w-5 ${
                type === "success" ? "text-green-400" : "text-red-400"
              } `}
              aria-hidden="true"
            />
          </div>
          <div className="ml-3">
            <p
              className={`text-sm font-medium ${
                type === "success" ? "text-green-800" : "text-red-800"
              } `}
            >
              {message}
            </p>
          </div>
          <div className="ml-auto pl-3">
            <div className="-my-1.5">
              <button
                onClick={() => toast.dismiss(t.id)}
                type="button"
                className={`inline-flex rounded-md  p-1.5 focus:outline-none focus:ring-2  focus:ring-offset-2 ${
                  type === "success"
                    ? "bg-green-50 text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50"
                    : "bg-red-50 text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50"
                }`}
              >
                <span className="sr-only">Dismiss</span>
                <HiXMark className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      duration: { success: 4000, error: 6000 }[type],
    }
  );
}

export default Toast;
