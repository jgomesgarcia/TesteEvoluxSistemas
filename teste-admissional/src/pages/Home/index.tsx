import { Icon } from '@fluentui/react'
import { Dropdown, IDropdownOption, Label, PrimaryButton, TextField } from '@fluentui/react';
import React from 'react'
import Loader from 'react-loader-spinner'
import { useDispatch } from 'react-redux'
import CircleButton from '../../componets/CircleButton'
import Modal from '../../componets/Modal'
import IPhoneNumber from '../../interfaces/IPhoneNumber'
import { LoadPhoneNumberRequest } from '../../storage/ducks/PhoneNumber/actions'
import { useTypedSelector } from '../../storage/ducks/rootReducer'
import { Container, SubTitle, Table, TableCell, TableControlsContainer, TableHeader, TableHeaderCell, TablePaginationContainer, TableRow, Title } from './styles'

const Home: React.FC = (): React.ReactElement => {
    const dispatch = useDispatch()

    const ListPhoneNumbers = useTypedSelector(store => store.PhoneNumber.ListPhoneNumber)
    const ListPhoneNumbersLoading = useTypedSelector(store => store.PhoneNumber.ListPhoneNumberLoading)
    const ListPhoneNumbersError = useTypedSelector(store => store.PhoneNumber.ListPhoneNumberError)
    const [countNumbers, setCountNumbers] = React.useState(0)
    const [currentPage, setCurrentPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(15)
    const [goTo, setGoTo] = React.useState(1);

    const [filterNumber, setFilterNumber] = React.useState("");
    const [filterMonthyPriceMin, setFilterMonthyPriceMin] = React.useState("");
    const [filterMonthyPriceMax, setFilterMonthyPriceMax] = React.useState("");
    const [filterSetupPriceMin, setFilterSetupPriceMin] = React.useState("");
    const [filterSetupPriceMax, setFilterSetupPriceMax] = React.useState("");
    const [filterStatus, setFilterStatus] = React.useState<IDropdownOption | undefined>()
    const [filterId, setFilterId] = React.useState(0);

    const optionsStatus: IDropdownOption[] = [
        {
            key: 0,
            text: "Todos"
        },
        {
            key: 1,
            text: "Activated",
        },
        {
            key: 2,
            text: "Disabled"
        },
    ]

    const TableItems = React.useMemo<IPhoneNumber[]>(() => {
        setCurrentPage(0);

        let array = [...ListPhoneNumbers];

        if (filterId) {
            const item = array.find(e => e.id === filterId)
            return item ? [item] : []
        }


        if (filterNumber)
            array = array?.filter(e => (e.value?.startsWith(filterNumber) || e.value?.replace(/[^0-9]/g, "")?.startsWith(filterNumber?.replace(/[^0-9]/g, ""))))

        if (filterStatus && filterStatus?.key) {
            if (filterStatus?.key === 1)
                array = array?.filter(e => e?.active === true)
            else if (filterStatus?.key === 2)
                array = array?.filter(e => e?.active === false)
        }

        if (filterMonthyPriceMin && Number(filterMonthyPriceMin?.replace(",", "")))
            array = array?.filter(e => e?.monthyPrice >= Number(filterMonthyPriceMin?.replace(",", "")))

        if (filterMonthyPriceMax && Number(filterMonthyPriceMax?.replace(",", "")))
            array = array?.filter(e => e?.monthyPrice <= Number(filterMonthyPriceMax?.replace(",", "")))

        if (filterSetupPriceMin && Number(filterSetupPriceMin?.replace(",", "")))
            array = array?.filter(e => e?.setupPrice >= Number(filterSetupPriceMin?.replace(",", "")))

        if (filterSetupPriceMax && Number(filterSetupPriceMax?.replace(",", "")))
            array = array?.filter(e => e?.setupPrice <= Number(filterSetupPriceMax?.replace(",", "")))


        return array
    }, [filterNumber, filterStatus, filterId, ListPhoneNumbers, filterMonthyPriceMin, filterMonthyPriceMax, filterSetupPriceMin, filterSetupPriceMax,])
    
    const countPages = React.useMemo(() => Math.ceil((TableItems?.length ?? 0) / rowsPerPage), [TableItems, rowsPerPage])

    const formatNumber = (valor: string) => {
        const value = valor?.replace(/[^0-9]/g, "");
        const matches = value.match(/[,]/g) ?? [];
        let newValue = value;
        if (matches?.length > 1)
            newValue = newValue.split(",")[0] + "," + newValue.split(",")[1]

        return newValue

    }

    const intlFormat = (value: number) => new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value)
    return (<Container>
        <div className="row mt-3">
            <Title>List of Phone Numbers</Title>
        </div>
        <div className="row my-3">
            <div className="col-12">
                <TableControlsContainer>
                    <div className="row my-3">
                        <div style={{ width: 'max-content' }}>
                            <SubTitle>How many phone numbers do you want to generate?</SubTitle>
                        </div>

                        <div style={{ width: 'max-content' }}>
                            <TextField
                                placeholder="Ex: 100"
                                value={countNumbers ? countNumbers?.toString() : ''}
                                onChange={(_, newValue) => setCountNumbers(Number(newValue?.replace(/[^0-9]/g, "") ?? 0))}
                            />
                        </div>

                        <div style={{ width: 'max-content' }}>
                            <PrimaryButton
                                text="Generate"
                                onClick={() => { if (countNumbers) dispatch(LoadPhoneNumberRequest(countNumbers)); setCurrentPage(0); }}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <SubTitle>Filters</SubTitle>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <TextField

                                label="Rows Per Page"
                                placeholder="Ex: 15"
                                value={rowsPerPage?.toString()}
                                onChange={(_, newValue) => { setRowsPerPage(Number(newValue?.replace(/[^0-9]/g, "") ?? 0)) }}
                            />
                        </div>

                        <div className="col">
                            <TextField

                                label="Seach By Id "
                                placeholder="Ex: 15"
                                value={filterId ? filterId?.toString() : ''}
                                onChange={(_, newValue) => { setFilterId(Number(newValue?.replace(/[^0-9]/g, "") ?? 0)) }}
                            />
                        </div>
                        <div className="col">
                            <TextField

                                label="Seach By Number"
                                placeholder="+00 00 0000-0000"
                                value={filterNumber}
                                onChange={(_, newValue) => { setFilterNumber(newValue ?? '') }}
                            />
                        </div>
                        <div className="col ">
                            <Dropdown
                                label="Status"
                                options={optionsStatus}
                                selectedKey={filterStatus?.key}
                                onChange={(_, op) => setFilterStatus(op)}
                            />
                        </div>
                    </div>
                    <div className="row">

                        <div className="col ">
                            <TextField

                                label="Min Monthy Price"
                                placeholder="0.00"
                                value={filterMonthyPriceMin}
                                onChange={(_, newValue) => { setFilterMonthyPriceMin(intlFormat(Number(formatNumber((newValue === '' ? '0' : newValue?.replace(",", '')) ?? '0')) / 100)) }}
                            />
                        </div>
                        <div className="col ">
                            <TextField

                                label="Max Monthy Price"
                                placeholder="0.00"
                                value={filterMonthyPriceMax}
                                onChange={(_, newValue) => { setFilterMonthyPriceMax(intlFormat(Number(formatNumber((newValue === '' ? '0' : newValue?.replace(",", '')) ?? '0')) / 100)) }}
                            />
                        </div>
                        <div className="col ">
                            <TextField

                                label="Min Setup Price"
                                placeholder="0.00"
                                value={filterSetupPriceMin}
                                onChange={(_, newValue) => { setFilterSetupPriceMin(intlFormat(Number(formatNumber((newValue === '' ? '0' : newValue?.replace(",", '')) ?? '0')) / 100)) }}
                            />
                        </div>
                        <div className="col ">
                            <TextField

                                label="Max Setup Price"
                                placeholder="0.00"
                                value={filterSetupPriceMax}
                                onChange={(_, newValue) => { setFilterSetupPriceMax(intlFormat(Number(formatNumber((newValue === '' ? '0' : newValue?.replace(",", '')) ?? '0')) / 100)) }}
                            />
                        </div>
                    </div>

                </TableControlsContainer>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <Table>
                    <TableHeader>
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>Number</TableHeaderCell>
                        <TableHeaderCell>Monthy Price</TableHeaderCell>
                        <TableHeaderCell>Setup Price</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                    </TableHeader>
                    {
                        TableItems?.length === 0 ?
                            <TableRow>
                                <TableCell colSpan={5}><span style={{ textAlign: 'center' }}>There are no items to display.</span></TableCell>
                            </TableRow>
                            : TableItems?.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage)?.map(e => (
                                <TableRow>
                                    <TableCell>{e?.id}</TableCell>
                                    <TableCell>{e?.value}</TableCell>
                                    <TableCell>{`${e?.currency} ${e?.monthyPrice}`}</TableCell>
                                    <TableCell>{`${e?.currency} ${e?.setupPrice}`}</TableCell>
                                    <TableCell>{e?.active ? "Activated" : "Disabled"}</TableCell>
                                </TableRow>
                            ))
                    }

                </Table>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <TablePaginationContainer>
                        <CircleButton diametro={45} onClick={() => { setCurrentPage(0) }} disabled={currentPage === 0}><Icon iconName="DoubleChevronLeft" /> </CircleButton>
                        <CircleButton diametro={45} onClick={() => { setCurrentPage(currentPage - 1) }} disabled={currentPage === 0}> <Icon iconName="ChevronLeft" /> </CircleButton>
                        <CircleButton diametro={45}> {currentPage + 1}</CircleButton>
                        <CircleButton diametro={45} onClick={() => { setCurrentPage(currentPage + 1) }} disabled={(currentPage + 1) === countPages} ><Icon iconName="ChevronRight" /> </CircleButton>
                        <CircleButton diametro={45} onClick={() => { setCurrentPage(countPages - 1) }} disabled={(currentPage + 1) === countPages} ><Icon iconName="DoubleChevronRight" /> </CircleButton>
                    </TablePaginationContainer>
                </div>
            </div>


            <div className="row mt-3 justify-content-between">
                <div style={{ width: 'max-content' }}>
                    <Label>Total Items: {ListPhoneNumbers?.length} </Label>
                </div>
                <div style={{ width: 'max-content' }}>
                    <Label>Total Filtered Items: {TableItems?.length} </Label>
                </div>
                <div style={{ width: 'max-content' }}>
                    <Label>Total Pages: {countPages} </Label>
                </div>

                <div style={{ width: 'max-content' }}>
                    <div className="row">
                        <div style={{ width: 'max-content' }}>
                            <Label>Go To Page:</Label>
                        </div>
                        <div style={{ width: 'max-content' }}>
                            <TextField
                                value={goTo ? goTo?.toString() : ''}
                                onChange={(_, newValue) => setGoTo(Number(newValue?.replace(/[^0-9]/g, "") ?? 0))}
                            />
                        </div>
                        <div style={{ width: 'max-content' }}>
                            <PrimaryButton
                                text="GO"
                                onClick={() => goTo ? setCurrentPage(goTo - 1) : ''}
                            />
                        </div>
                    </div>
                </div>


            </div>
        </div>
        {!!ListPhoneNumbersLoading &&
            <Modal>
                <div style={{ padding: "20px 60px" }}>
                    <Loader type="Oval" color="#0078d4" height={50} width={50} />
                </div>
            </Modal>
        }


        {!!ListPhoneNumbersError &&
            <Modal>
                <div style={{ padding: "20px 60px" }}>
                    {ListPhoneNumbersError}
                </div>
            </Modal>
        }
    </Container>)
}
export default Home
