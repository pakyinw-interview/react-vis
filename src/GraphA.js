import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis'
import useGraphAData from './useGraphAData';

function GraphA() {
    const data = useGraphAData();
    return (
        <div>
            <XYPlot width={400} height={300}>           
                <LineSeries data={data.data} />
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis /> 
            </XYPlot>
        </div>
    )
}

export default GraphA;