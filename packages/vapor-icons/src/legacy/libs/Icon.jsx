import React from 'react';

import PropTypes from 'prop-types';

import Academy from './Academy';
import ArrowDown from './ArrowDown';
import Back from './Back';
import Bell from './Bell';
import Bold from './Bold';
import Build from './Build';
import Cancel from './Cancel';
import Cards from './Cards';
import CaretDown from './CaretDown';
import CaretLeft from './CaretLeft';
import CaretRight from './CaretRight';
import CaretUp from './CaretUp';
import Chapter from './Chapter';
import ChartPie from './ChartPie';
import CheckSelect from './CheckSelect';
import ChevronDoubleLeft from './ChevronDoubleLeft';
import ChevronDoubleRight from './ChevronDoubleRight';
import ChevronDown from './ChevronDown';
import ChevronLeft from './ChevronLeft';
import ChevronRight from './ChevronRight';
import ChevronUp from './ChevronUp';
import Choice from './Choice';
import Circle from './Circle';
import Close from './Close';
import CodePractice from './CodePractice';
import Comment from './Comment';
import Complete from './Complete';
import Confirm from './Confirm';
import Connection from './Connection';
import Control from './Control';
import ControlDown from './ControlDown';
import ControlUp from './ControlUp';
import Copy from './Copy';
import Course from './Course';
import CourseHistory from './CourseHistory';
import CourseManagement from './CourseManagement';
import CourseSetting from './CourseSetting';
import Danal from './Danal';
import Download from './Download';
import Equal from './Equal';
import Eraser from './Eraser';
import Exam from './Exam';
import ExamList from './ExamList';
import ExamManagement from './ExamManagement';
import Facebook from './Facebook';
import FacebookBtn from './FacebookBtn';
import File from './File';
import Flag from './Flag';
import Help from './Help';
import HelpCircle from './HelpCircle';
import Hide from './Hide';
import Home from './Home';
import Image from './Image';
import Indeterminate from './Indeterminate';
import Information from './Information';
import InputSetting from './InputSetting';
import Italic from './Italic';
import Learn from './Learn';
import Link from './Link';
import List from './List';
import LogoGoormIde from './LogoGoormIde';
import Mail from './Mail';
import MarkMode from './MarkMode';
import Markdown from './Markdown';
import Menu from './Menu';
import Minus from './Minus';
import MinusBox from './MinusBox';
import More from './More';
import MoreBorder from './MoreBorder';
import Movie from './Movie';
import NewMessage from './NewMessage';
import Notice from './Notice';
import Operation from './Operation';
import Payco from './Payco';
import Pen from './Pen';
import PlayMode from './PlayMode';
import Plus from './Plus';
import PlusBox from './PlusBox';
import PracticeContents from './PracticeContents';
import Preset from './Preset';
import Price from './Price';
import Print from './Print';
import Profile from './Profile';
import Qna from './Qna';
import Quote from './Quote';
import Refresh from './Refresh';
import Reply from './Reply';
import ResultManagement from './ResultManagement';
import Save from './Save';
import School from './School';
import Search from './Search';
import Setting from './Setting';
import Show from './Show';
import Sos from './Sos';
import Sourcecode from './Sourcecode';
import Star from './Star';
import StarHalf from './StarHalf';
import StarOutline from './StarOutline';
import Stop from './Stop';
import StudentManagement from './StudentManagement';
import SubmitMode from './SubmitMode';
import Syllabus from './Syllabus';
import Terminal from './Terminal';
import TerminalWindow from './TerminalWindow';
import Times from './Times';
import Underline from './Underline';
import University from './University';
import Upload from './Upload';
import UrlBtn from './UrlBtn';
import User from './User';
import ViewExpand from './ViewExpand';
import ViewScroll from './ViewScroll';
import ViewShrink from './ViewShrink';
import ZoomIn from './ZoomIn';
import ZoomOut from './ZoomOut';

function Icon({ iconId, className, ...iconProps }) {
    const IconComponents = {
        academy: Academy,
        'arrow-down': ArrowDown,
        back: Back,
        bell: Bell,
        build: Build,
        cancel: Cancel,
        cards: Cards,
        'caret-down': CaretDown,
        'caret-left': CaretLeft,
        'caret-right': CaretRight,
        'caret-up': CaretUp,
        chapter: Chapter,
        'chart-pie': ChartPie,
        'check-select': CheckSelect,
        'chevron-double-left': ChevronDoubleLeft,
        'chevron-double-right': ChevronDoubleRight,
        'chevron-down': ChevronDown,
        'chevron-left': ChevronLeft,
        'chevron-right': ChevronRight,
        'chevron-up': ChevronUp,
        choice: Choice,
        circle: Circle,
        close: Close,
        'code-practice': CodePractice,
        comment: Comment,
        complete: Complete,
        confirm: Confirm,
        connection: Connection,
        control: Control,
        'control-up': ControlUp,
        'control-down': ControlDown,
        copy: Copy,
        course: Course,
        'course-history': CourseHistory,
        'course-management': CourseManagement,
        'course-setting': CourseSetting,
        download: Download,
        equal: Equal,
        eraser: Eraser,
        exam: Exam,
        'exam-list': ExamList,
        'exam-management': ExamManagement,
        facebook: Facebook,
        'facebook-btn': FacebookBtn,
        file: File,
        flag: Flag,
        home: Home,
        help: Help,
        'help-circle': HelpCircle,
        image: Image,
        indeterminate: Indeterminate,
        information: Information,
        'input-setting': InputSetting,
        italic: Italic,
        learn: Learn,
        list: List,
        mail: Mail,
        markdown: Markdown,
        'mark-mode': MarkMode,
        menu: Menu,
        minus: Minus,
        'minus-box': MinusBox,
        more: More,
        'more-border': MoreBorder,
        movie: Movie,
        notice: Notice,
        'new-message': NewMessage,
        operation: Operation,
        pen: Pen,
        'play-mode': PlayMode,
        plus: Plus,
        'plus-box': PlusBox,
        'practice-contents': PracticeContents,
        preset: Preset,
        price: Price,
        print: Print,
        qna: Qna,
        refresh: Refresh,
        reply: Reply,
        'result-management': ResultManagement,
        save: Save,
        search: Search,
        school: School,
        setting: Setting,
        sos: Sos,
        star: Star,
        'star-half': StarHalf,
        'star-outline': StarOutline,
        stop: Stop,
        'student-management': StudentManagement,
        'submit-mode': SubmitMode,
        syllabus: Syllabus,
        terminal: Terminal,
        'terminal-window': TerminalWindow,
        times: Times,
        university: University,
        upload: Upload,
        'url-btn': UrlBtn,
        user: User,
        'view-expand': ViewExpand,
        'view-scroll': ViewScroll,
        'view-shrink': ViewShrink,
        'zoom-in': ZoomIn,
        'zoom-out': ZoomOut,
        Payco,
        Danal,
        profile: Profile,
        'logo-goorm-ide': LogoGoormIde,
        show: Show,
        hide: Hide,
        bold: Bold,
        link: Link,
        quote: Quote,
        sourcecode: Sourcecode,
        underline: Underline,
    };

    const IconName = IconComponents[iconId] || 'span';

    return <IconName className={className} {...iconProps} />;
}

Icon.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
    className: '',
};

Icon.propTypes = {
    iconId: PropTypes.string.isRequired,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
    className: PropTypes.string,
};

export default Icon;
