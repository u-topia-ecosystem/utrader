import { useQuery } from "@tanstack/react-query"
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/components/ui/table"
import { cn } from "@/shared/utils/cn"
import { fetchCoin } from "./data"
import { getColumns } from "./columns"
import { Skeleton } from "@/shared/components/ui/skeleton"
import { useSetMobileDevice } from "@openware/neodax-web-sdk"

const MarketsTable = () => {
  const { data = [] } = useQuery({ queryKey: ["markets-data"], queryFn: fetchCoin, refetchInterval: 30_000 })
  const isMobile = useSetMobileDevice(false, 600)

  const emptyList: number[] = new Array(7).fill(0)
  const emptyRows: number[] = new Array(isMobile ? 3 : 4).fill(0)

  const table = useReactTable({
    data,
    columns: getColumns(isMobile),
    getCoreRowModel: getCoreRowModel(),
  })

  const styles = {
    tableHeader: "bg-neutral-control-color-10",
    tableRow: "",
    tableHead: "ring-0 text-right text-xs font-semibold text-text-color-60 font-open-sans",
    tableCell: "ring-0 py-3 text-right text-sm font-semibold text-text-color-100 font-open-sans",
  }

  return (
    <div className="h-fit overflow-x-auto rounded-md border">
      <Table className="h-full max-h-full min-h-full">
        <TableHeader className={styles.tableHeader}>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className={styles.tableRow}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className={styles.tableHead}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="">
          {table.getRowModel().rows?.length
            ? table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"} className={cn(styles.tableRow)}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className={styles.tableCell} key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            : emptyList.map((_, index) => (
                <TableRow className={cn(styles.tableRow)} key={index}>
                  {emptyRows.map((_, idx) => (
                    <TableCell key={idx} className={styles.tableCell}>
                      <Skeleton className="h-[40px] bg-neutral-control-color-60" />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default MarketsTable
