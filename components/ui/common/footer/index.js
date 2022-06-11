export default function Footer() {

    return (
      <footer className="bg-gray-900 pt-2">
        <div className="container mx-auto px-5">
          <div className="mt-1 flex flex-col items-center">
            <div className="py-2">
              <p className="mb-6 text-white text-sm text-primary-2 font-bold">
                  © {new Date().getFullYear()} BlockTune
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }