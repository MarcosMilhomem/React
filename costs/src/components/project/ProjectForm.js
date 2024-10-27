import style from "./ProjectForm.module.css"
import Input from "../forms/Input"
import Select from "../forms/Select"
import SubmitButton from "../forms/SubmitButton"

function ProjectForm({ btnText }) {
    return (
        <form className={style.form}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            />
            <Input
                type="Number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total" />

            <Select name="category_id" text="Selecione a categoria" />

            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm