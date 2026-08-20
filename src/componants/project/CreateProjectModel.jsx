import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function CreateProjectModel({ open, setOpen }) {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {/* Trigger */}
      <Dialog.Trigger asChild>
        <button
          className="
            inline-flex items-center gap-2
            rounded-xl
            bg-[#5138ee]
            px-5 py-3
            text-sm font-semibold text-white
            shadow-[0_0_25px_rgba(81,56,238,0.25)]
            transition-all duration-200
            hover:bg-[#5d45ff]
            hover:shadow-[0_0_35px_rgba(81,56,238,0.4)]
            active:scale-[0.98]
          "
        >
          <span className="text-lg leading-none">+</span>
          New Project
        </button>
      </Dialog.Trigger>

      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            {/* Overlay */}
            <Dialog.Overlay asChild>
              <motion.div
                className="
                  fixed inset-0 z-40
                  bg-[#020617]/75
                  backdrop-blur-[6px]
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>

            {/* Modal */}
            <Dialog.Content asChild>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.94,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.94,
                  y: 25,
                }}
                transition={{
                  duration: 0.22,
                  ease: "easeOut",
                }}
                className="
                  fixed left-1/2 top-1/2 z-50
                  w-[calc(100%-32px)]
                  max-w-[520px]
                  -translate-x-1/2
                  -translate-y-1/2

                  overflow-hidden
                  rounded-[20px]

                  border border-[#202b4a]
                  bg-[#0d1328]

                  shadow-[0_25px_80px_rgba(0,0,0,0.55)]
                "
              >
                {/* Purple glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -top-32
                    left-1/2
                    h-64
                    w-64
                    -translate-x-1/2
                    rounded-full
                    bg-[#5138ee]/15
                    blur-[80px]
                  "
                />

                <div className="relative p-7 sm:p-8">
                  {/* Header */}
                  <div className="mb-7 flex items-start justify-between">
                    <div>
                      {/* Icon */}
                      <div
                        className="
                          mb-5
                          flex h-12 w-12
                          items-center justify-center
                          rounded-[14px]
                          bg-[#5138ee]
                          text-white
                          shadow-[0_8px_25px_rgba(81,56,238,0.35)]
                        "
                      >
                        <Sparkles size={22} strokeWidth={2} />
                      </div>

                      <Dialog.Title
                        className="
                          text-[26px]
                          font-bold
                          tracking-[-0.5px]
                          text-white
                        "
                      >
                        Create New Project
                      </Dialog.Title>

                      <Dialog.Description
                        className="
                          mt-1.5
                          text-[15px]
                          leading-6
                          text-[#8491aa]
                        "
                      >
                        Add a new project to your workspace.
                      </Dialog.Description>
                    </div>

                    {/* Close */}
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        aria-label="Close"
                        className="
                          flex h-9 w-9
                          items-center justify-center
                          rounded-lg
                          text-[#71809d]
                          transition-colors
                          hover:bg-[#151d35]
                          hover:text-white
                        "
                      >
                        <X size={19} />
                      </button>
                    </Dialog.Close>
                  </div>

                  {/* Form */}
                  <form className="space-y-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="project-name"
                        className="
                          mb-2.5
                          block
                          text-[13px]
                          font-semibold
                          uppercase
                          tracking-[0.3px]
                          text-[#c3cada]
                        "
                      >
                        Project Name
                      </label>

                      <input
                        id="project-name"
                        name="name"
                        type="text"
                        placeholder="Hiroku"
                        required
                        className="
                          h-[54px]
                          w-full
                          rounded-xl
                          border border-[#202b4a]
                          bg-[#070d20]
                          px-4

                          text-[15px]
                          text-white
                          placeholder:text-[#46536e]

                          outline-none
                          transition-all

                          focus:border-[#5138ee]
                          focus:ring-2
                          focus:ring-[#5138ee]/20
                        "
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <label
                        htmlFor="project-description"
                        className="
                          mb-2.5
                          block
                          text-[13px]
                          font-semibold
                          uppercase
                          tracking-[0.3px]
                          text-[#c3cada]
                        "
                      >
                        Description
                      </label>

                      <textarea
                        id="project-description"
                        name="description"
                        placeholder="This project is based on world"
                        rows={4}
                        required
                        className="
                          w-full
                          resize-none
                          rounded-xl
                          border border-[#202b4a]
                          bg-[#070d20]
                          px-4 py-3.5

                          text-[15px]
                          leading-6
                          text-white
                          placeholder:text-[#46536e]

                          outline-none
                          transition-all

                          focus:border-[#5138ee]
                          focus:ring-2
                          focus:ring-[#5138ee]/20
                        "
                      />
                    </div>

                    {/* Buttons */}
                    <div
                      className="
                        flex
                        flex-col-reverse
                        gap-3
                        pt-3
                        sm:flex-row
                        sm:justify-end
                      "
                    >
                      <Dialog.Close asChild>
                        <button
                          type="button"
                          className="
                            h-[52px]
                            rounded-xl
                            border border-[#202b4a]
                            bg-[#0a1023]
                            px-6

                            text-sm
                            font-semibold
                            text-[#9aa6bd]

                            transition-all
                            hover:border-[#33405f]
                            hover:bg-[#11182d]
                            hover:text-white
                          "
                        >
                          Cancel
                        </button>
                      </Dialog.Close>

                      <button
                        type="submit"
                        className="
                          group
                          flex h-[52px]
                          items-center
                          justify-center
                          gap-2
                          rounded-xl

                          bg-[#5138ee]
                          px-7

                          text-sm
                          font-bold
                          text-white

                          shadow-[0_8px_25px_rgba(81,56,238,0.3)]

                          transition-all
                          hover:bg-[#5d45ff]
                          hover:shadow-[0_10px_35px_rgba(81,56,238,0.45)]
                          active:scale-[0.98]
                        "
                      >
                        Create Project
                        <ArrowRight
                          size={18}
                          className="
                            transition-transform
                            duration-200
                            group-hover:translate-x-1
                          "
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

export default CreateProjectModel;
