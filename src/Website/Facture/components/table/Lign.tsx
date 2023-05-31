import React from "react";
import formatCurrency from "../../../../App/components/formatCurrency";
import { Sum, TableLignProps, TableLignState } from "../../interface/interface";

export class TableLign extends React.Component<TableLignProps, TableLignState> {
  constructor(props: TableLignProps) {
    super(props);

    this.state = {
      name: props.name,
      price: props.price,
      qte: props.qte,
    };
  }

  changeLign(setter: string, value: string | number) {
    this.setState((prev) => ({
      ...prev,
      [setter]: value,
    }));
  }

  componentDidUpdate(prevProps: TableLignProps) {
    const getTotal = document.querySelectorAll(".subtotal");
    const subtotals: any[] = [];

    if (prevProps.price === this.props.price) {
      getTotal.forEach((sub) => subtotals.push(sub.id));

      if (subtotals.length < 1) return;

      const total = subtotals.map((e) => e * 1).reduce((a, b) => a + b);

      this.props.setTotal(total);
    }
  }

  onBlur = () => {
    const formattedPrice = formatCurrency(
      this.transformPriceStringToNumber(this.state.price)
    );

    const input = document.querySelectorAll<HTMLInputElement>(
      "#price-" + this.props.id
    );
    if (input) {
      input.forEach((input) => {
        input.value = formattedPrice;
      });
    }
  };

  transformPriceStringToNumber(price: string): number {
    return Number(
      String(price).replace(/\s/g, "").replace(/€/g, "").replace(/,/g, ".")
    );
  }

  render() {
    const getSumArray: Sum = [this.state.price, this.state.qte];

    const getSum: number =
      this.transformPriceStringToNumber(getSumArray[0]) * getSumArray[1];

    return (
      <div className="display" onBlur={this.onBlur}>
        <div style={{ width: "40%" }} className="tb tb-left tb-bottom">
          <input
            className="border-0 w-100p h-100p"
            onChange={(e) => this.changeLign("name", e.target.value)}
            placeholder={this.state.name}
          />
        </div>
        <div
          style={{ width: "25%", textAlign: "end" }}
          className="tb tb-right tb-left tb-bottom"
        >
          <input
            className="border-0 w-100p h-100p"
            id={"price-" + this.props.id}
            style={{ textAlign: "end" }}
            onChange={(e) => this.changeLign("price", e.target.value)}
            placeholder={this.state.price.toString()}
          />
        </div>
        <div
          style={{ width: "10%", textAlign: "end" }}
          className="tb tb-right tb-bottom"
        >
          <input
            className="border-0 w-100p h-100p"
            style={{ textAlign: "end" }}
            onChange={(e) => this.changeLign("qte", e.target.value)}
            placeholder={this.state.qte.toString()}
          />
        </div>
        <div
          style={{ width: "20%", textAlign: "end" }}
          className="tb tb-right tb-bottom"
        >
          <span className="subtotal" id={getSum.toString()}>
            {formatCurrency(getSum)}
          </span>
        </div>
      </div>
    );
  }
}
