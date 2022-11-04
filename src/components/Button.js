export default function Button() {
  return (
    <>
      <div class="flex items-center justify-center">
        <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
          <a
            href="#"
            aria-current="page"
            class="
              rounded-l
              px-8
              py-2.5
              bg-green-600
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              hover:bg-green-700
              focus:bg-green-700 focus:outline-none focus:ring-0
              active:bg-green-900
              transition
              duration-150
              ease-in-out
            "
          >
            Imperial
          </a>
          <a
            href="#"
            class="
              px-8
              py-2.5
              bg-green-600
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              hover:bg-green-700
              focus:bg-green-700 focus:outline-none focus:ring-0
              active:bg-green-800
              transition
              duration-150
              ease-in-out
            "
          >
            Metric
          </a>
        </div>
      </div>
    </>
  );
}
