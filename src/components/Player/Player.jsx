import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import { getVideoSource } from "../../actions";
import PropTypes from "prop-types";
import NotFound from "../../screens/NotFound/NotFound";
import "./Player.scss";

const Player = (props) => {
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;

  useLayoutEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <section className="player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="player__back">
        <button type="button" onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </section>
  ) : (
    <NotFound />
  );
};

Player.propTypes = {
  id: PropTypes.string,
  playing: PropTypes.object,
  getVideoSource: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
