import { createContext, ReactNode, useRef } from "react"

type KurvType = {
  modal: HTMLDialogElement,
  openModal: () => void,
  closeModal: () => void
}

export const kurvContext = createContext<KurvType>(null)

const HandleKurvContext = ({ children }: { children: ReactNode }) => {
  const modal = useRef<HTMLDialogElement>(null)

  const openModal = () => {
    modal.current.showModal()
  }
  const closeModal = () => {
    modal.current.close()
  }

  return (
    <>
      <kurvContext.Provider value={{ modal, openModal, closeModal }}>
        {children}
      </kurvContext.Provider>
    </>
  )
}

export default HandleKurvContext
