import Fab from './Fab';
import Tabs from './Tabs';
import Chip from './Chip';
import Card from './Card';
import Menu from './Menu';
import Link from './Link';
import Input from './Input';
import Radio from './Radio';
import LoadingButton from './LoadingButton';
import ToggleButton from './ToggleButton';
import ControlLabel from './ControlLabel';
import Autocomplete from './Autocomplete';
import Breadcrumbs from './Breadcrumbs';
import ButtonGroup from './ButtonGroup';
import Pagination from './Pagination';
import Typography from './Typography';
import Accordion from './Accordion';
import Progress from './Progress';
import Backdrop from './Backdrop';
import TreeView from './TreeView';
import Timeline from './Timeline';
import Skeleton from './Skeleton';
import DataGrid from './DataGrid';
import Checkbox from './Checkbox';
import Popover from './Popover';
import Tooltip from './Tooltip';
import Stepper from './Stepper';
import Drawer from './Drawer';
import Slider from './Slider';
import Avatar from './Avatar';
import Dialog from './Dialog';
import Rating from './Rating';
import Select from './Select';
import Switch from './Switch';
import Alert from './Alert';
import Paper from './Paper';
import Table from './Table';
import Badge from './Badge';
import List from './List';
import CssBaseline from './CssBaseline';
import SvgIcon from './SvgIcon';
import Button from './Button';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Fab(theme),
    Tabs(theme),
    Chip(theme),
    Card(theme),
    Menu(theme),
    Link(theme),
    Input(theme),
    Radio(theme),
    Badge(theme),
    List(theme),
    Table(theme),
    Paper(theme),
    Alert(theme),
    Switch(theme),
    Select(theme),
    Button(theme),
    Rating(theme),
    Dialog(theme),
    Avatar(theme),
    Slider(theme),
    Drawer(theme),
    Stepper(theme),
    Tooltip(theme),
    Popover(theme),
    SvgIcon(theme),
    Checkbox(theme),
    DataGrid(theme),
    Skeleton(theme),
    Timeline(theme),
    TreeView(theme),
    Backdrop(theme),
    Progress(theme),
    Accordion(theme),
    Typography(theme),
    Pagination(theme),
    ButtonGroup(theme),
    Breadcrumbs(theme),
    CssBaseline(theme),
    Autocomplete(theme),
    ControlLabel(theme),
    ToggleButton(theme),
    LoadingButton(theme)
  );
}