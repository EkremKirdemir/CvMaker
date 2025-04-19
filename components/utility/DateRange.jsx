const DateRange = ({ startYear, endYear, id }) => {
    const start = startYear ? new Date(startYear) : null;
    const end = endYear ? new Date(endYear) : null;

    const isValidDate = (date) => date instanceof Date && !isNaN(date);

    return (
        <>
            {isValidDate(start) || isValidDate(end) ? ( // Eğer en az bir geçerli tarih varsa göster
                <p id={id} className="sub-content">
                    {isValidDate(start) ? start.toLocaleString('default', { month: 'short' }) + ', ' + start.getFullYear() : ""}
                    {isValidDate(start) && isValidDate(end) ? " - " : ""}
                    {isValidDate(end) ? end.toLocaleString('default', { month: 'short' }) + ', ' + end.getFullYear() : "Present"}
                </p>
            ) : null} {/* Eğer tarih yoksa hiç göstermesin */}
        </>
    );
};

export default DateRange;
